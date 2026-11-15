
EARTHSCOPE 360
NASA SPACE APPS CHALLENGE 2026
================================

PROJECT OVERVIEW

EarthScope 360 is a browser-based environmental data exploration
application developed for the NASA Space Apps Challenge:

"Be An Earth System Trend Detective!"

The application helps users explore historical environmental
changes across selected locations in Nigeria.

TEAM INFORMATION

Team Name: SAHEL EARTHLAB

Project Lead: Abdulshukur Umar Ahmad

TEAM MEMBERS

1. Abdulshukur Umar Ahmad
2. Dauda Aliyu Adamu
3. Aminu Seyoji Muhammad S.
4. Ibrahim Lawan Yahaya

Local Event: Gombe, Nigeria

PROJECT FEATURES

- Location selection: Gombe, Bauchi, Kano, Lagos and Abuja.
- Temperature analysis (T2M).
- Corrected precipitation analysis (PRECTOTCORR).
- Relative humidity analysis (RH2M).
- Historical data retrieval from NASA POWER.
- Day-weighted annual averages with leap-year handling.
- Annual time-series visualization using Chart.js.
- Linear regression for estimating environmental trends.
- Tie-corrected Mann–Kendall trend testing.
- Plain-language interpretation of analytical results.

TECHNOLOGIES

- HTML
- CSS
- JavaScript
- NASA POWER Monthly Point API
- Chart.js

HOW TO USE

1. Open the published EarthScope 360 website.
2. Select a Nigerian study location.
3. Choose an environmental variable.
4. Select the start and end years.
5. Click "Analyze NASA data".
6. Review the chart, trend estimate and statistical interpretation.

TESTED EXAMPLE

Location: Gombe, Nigeria
Variable: Mean air temperature (T2M)
Period: 2001–2025
Estimated trend: +0.0309 °C per year
Mann–Kendall approximate p-value: 0.1831

Interpretation:
The result does not provide sufficient evidence of a monotonic
trend at the 5% significance level.

This example describes the selected NASA POWER grid point
and period, not the entire country.

IMPORTANT SCIENTIFIC LIMITATIONS

- NASA POWER meteorological data are gridded estimates,
  not direct measurements from local weather stations.
- The Mann–Kendall test does not adjust for serial correlation.
- Statistical significance does not establish causation.
- Results apply to the selected location and historical period.

DATA SOURCE

NASA POWER Monthly API:
https://power.larc.nasa.gov/docs/services/api/temporal/monthly/

PROJECT WEBSITE

https://kingabdulfx.github.io/EarthScope360/

GITHUB REPOSITORY

https://github.com/KINGABDULFX/EarthScope360
