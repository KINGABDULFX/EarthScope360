
let chart;

const $ = id => document.getElementById(id);

// Calculate the linear trend using actual calendar years.
function regression(rows) {
    const n = rows.length;

    const meanYear = rows.reduce((sum, row) => sum + row.year, 0) / n;
    const meanValue = rows.reduce((sum, row) => sum + row.value, 0) / n;

    let numerator = 0;
    let denominator = 0;

    for (const row of rows) {
        numerator += (row.year - meanYear) * (row.value - meanValue);
        denominator += (row.year - meanYear) ** 2;
    }

    const slope = denominator ? numerator / denominator : 0;

    return {
        slope,
        intercept: meanValue - slope * meanYear
    };
}

// Mann–Kendall trend test with tie correction.
function mkTest(values) {
    const n = values.length;
    let s = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            s += Math.sign(values[j] - values[i]);
        }
    }

    const counts = new Map();

    for (const value of values) {
        counts.set(value, (counts.get(value) || 0) + 1);
    }

    let tieCorrection = 0;

    for (const t of counts.values()) {
        if (t > 1) {
            tieCorrection += t * (t - 1) * (2 * t + 5);
        }
    }

    const variance =
        (n * (n - 1) * (2 * n + 5) - tieCorrection) / 18;

    if (variance <= 0) {
        return { s, z: 0, p: 1 };
    }

    const z = s > 0
        ? (s - 1) / Math.sqrt(variance)
        : s < 0
            ? (s + 1) / Math.sqrt(variance)
            : 0;

    const p = Math.min(
        1,
        2 * (1 - normalCdf(Math.abs(z)))
    );

    return { s, z, p };
}

// Approximation of the standard normal cumulative distribution.
function normalCdf(x) {
    const t = 1 / (1 + 0.2316419 * x);
    const d = 0.3989423 * Math.exp(-x * x / 2);

    const p = d * t * (
        0.3193815 +
        t * (
            -0.3565638 +
            t * (
                1.781478 +
                t * (
                    -1.821256 +
                    t * 1.330274
                )
            )
        )
    );

    return 1 - p;
}

// Check whether a year is a leap year.
function isLeapYear(year) {
    return year % 4 === 0 &&
        (year % 100 !== 0 || year % 400 === 0);
}

// Get the number of days in a month.
function daysInMonth(year, month) {
    const days = [
        31,
        isLeapYear(year) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];

    return days[month - 1];
}

// Convert monthly NASA POWER values into day-weighted annual averages.
function meanMonthly(data) {
    const groups = {};

    for (const [date, rawValue] of Object.entries(data)) {
        const value = Number(rawValue);

        if (
            !/^\d{6}$/.test(date) ||
            !Number.isFinite(value) ||
            value === -999
        ) {
            continue;
        }

        const year = Number(date.slice(0, 4));
        const month = Number(date.slice(4, 6));

        if (month < 1 || month > 12) {
            continue;
        }

        if (!groups[year]) {
            groups[year] = {
                total: 0,
                days: 0
            };
        }

        const days = daysInMonth(year, month);

        groups[year].total += value * days;
        groups[year].days += days;
    }

    return Object.entries(groups)
        .filter(([, group]) => group.days > 0)
        .map(([year, group]) => ({
            year: Number(year),
            value: group.total / group.days
        }))
        .sort((a, b) => a.year - b.year);
}

// Main analysis function.
async function analyze() {
    const [lat, lon] = $("place").value.split(",");

    const param = $("variable").value;
    const start = Number($("start").value);
    const end = Number($("end").value);

    if (
        !Number.isInteger(start) ||
        !Number.isInteger(end) ||
        start < 1981 ||
        end > 2025 ||
        end <= start
    ) {
        $("status").textContent =
            "Choose a valid year range (1981–2025), with end year after start year.";

        return;
    }

    $("analyze").disabled = true;

    $("status").textContent =
        "Retrieving monthly data from NASA POWER…";

    try {
        const url =
            `https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=${param}&community=SB&longitude=${lon}&latitude=${lat}&start=${start}&end=${end}&format=JSON`;

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(
                `NASA API returned HTTP ${res.status}`
            );
        }

        const json = await res.json();

        const raw = json?.properties?.parameter?.[param];

        if (!raw) {
            throw new Error(
                "The requested NASA POWER data were not found."
            );
        }

        const rows = meanMonthly(raw);

        if (rows.length < 8) {
            throw new Error(
                "Not enough valid annual records for a meaningful trend test."
            );
        }

        const vals = rows.map(row => row.value);

        const reg = regression(rows);
        const mk = mkTest(vals);

        const unit =
            param === "T2M"
                ? "°C"
                : param === "PRECTOTCORR"
                    ? "mm/day"
                    : "%";

        const slope = reg.slope;

        // Display calculated results.
        $("slope").textContent =
            `${slope >= 0 ? "+" : ""}${slope.toFixed(4)} ${unit}`;

        $("direction").textContent =
            Math.abs(slope) < 0.00001
                ? "Nearly flat"
                : slope > 0
                    ? "Increasing"
                    : "Decreasing";

        $("significance").textContent =
            mk.p < 0.05
                ? "Significant (p < 0.05)"
                : "Not significant (p ≥ 0.05)";

        $("count").textContent = rows.length;

        // Explain the result in plain language.
        $("interpretation").textContent =
            `For ${$("place").selectedOptions[0].text}, annual averages of ${$("variable").selectedOptions[0].text.toLowerCase()} from ${rows[0].year} to ${rows.at(-1).year} show an estimated linear change of ${slope.toFixed(4)} ${unit} per year. The tie-corrected Mann–Kendall test gives an approximate p-value of ${mk.p.toFixed(4)} (${mk.p < 0.05 ? "evidence of a monotonic trend at the 5% level" : "insufficient evidence of a monotonic trend at the 5% level"}). This describes the selected grid point and period, not all of Nigeria. The test does not adjust for serial correlation, which can affect the significance estimate.`;

        // Generate the linear trend using actual calendar years.
        const trend = rows.map(
            row => reg.intercept + reg.slope * row.year
        );

        if (chart) {
            chart.destroy();
        }

        chart = new Chart($("chart"), {
            type: "line",

            data: {
                labels: rows.map(row => row.year),

                datasets: [
                    {
                        label: "Annual average",
                        data: vals,
                        borderColor: "#45d6c5",
                        backgroundColor: "#45d6c522",
                        fill: true,
                        tension: 0.2
                    },

                    {
                        label: "Linear trend",
                        data: trend,
                        borderColor: "#f3b85b",
                        borderDash: [6, 5],
                        pointRadius: 0
                    }
                ]
            },

            options: {
                responsive: true,

                plugins: {
                    legend: {
                        labels: {
                            color: "#dceafa"
                        }
                    }
                },

                scales: {
                    x: {
                        ticks: {
                            color: "#9eb4c8"
                        },

                        grid: {
                            color: "#1c3549"
                        }
                    },

                    y: {
                        ticks: {
                            color: "#9eb4c8"
                        },

                        grid: {
                            color: "#1c3549"
                        },

                        title: {
                            display: true,
                            text: unit,
                            color: "#9eb4c8"
                        }
                    }
                }
            }
        });

        $("status").textContent =
            `Analysis complete. NASA POWER monthly data retrieved for ${rows.length} annual records.`;

    } catch (error) {
        $("status").textContent =
            `Could not complete analysis: ${error.message}. Check internet access and try again.`;

    } finally {
        $("analyze").disabled = false;
    }
}

// Connect the Analyze button to the analysis function.
$("analyze").addEventListener("click", analyze);
