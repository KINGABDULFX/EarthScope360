
# EARTHSCOPE 360
## Discovering Earth's Changing Signals

**NASA Space Apps Challenge 2026**

**Challenge:** Be An Earth System Trend Detective!

**Team:** SAHEL EARTHLAB

**Project Lead:** Abdulshukur Umar Ahmad

**Local Event:** Gombe, Nigeria

---

# SLIDE 1 — PROJECT INTRODUCTION

**EARTHSCOPE 360**

Discovering Earth's Changing Signals

An interactive environmental data exploration application that makes historical NASA environmental data easier to understand.

Team: SAHEL EARTHLAB

Project Lead: Abdulshukur Umar Ahmad

NASA Space Apps Challenge 2026

---

# SLIDE 2 — THE PROBLEM

Environmental data contain important information about changes in our planet.

However, many people find it difficult to:

- Access historical environmental datasets.
- Identify long-term environmental trends.
- Visualize changes across different periods.
- Understand whether observed trends are statistically meaningful.

**Our goal:** Make environmental data easier to access, explore and interpret.

---

# SLIDE 3 — OUR SOLUTION

**Introducing EarthScope 360**

A browser-based platform that allows users to:

- Select Nigerian locations.
- Explore temperature, precipitation and relative humidity.
- Retrieve historical environmental data from NASA POWER.
- Visualize annual environmental changes.
- Estimate trends using statistical methods.
- Interpret results through simple explanations.

---

# SLIDE 4 — HOW IT WORKS

**Our analytical workflow**

1. User selects a location.
2. User selects an environmental variable.
3. User chooses a historical period.
4. The application retrieves monthly data from NASA POWER.
5. Monthly values are converted into day-weighted annual averages.
6. Linear regression estimates the trend.
7. The Mann–Kendall test examines evidence of a monotonic trend.
8. Results are presented through charts and plain-language interpretation.

---

# SLIDE 5 — REAL-WORLD TEST RESULT

**Gombe, Nigeria — Mean Air Temperature**

Study period: 2001–2025

Estimated linear change:

**+0.0309 °C per year**

Mann–Kendall approximate p-value:

**0.1831**

Statistical interpretation:

The result does not provide sufficient evidence of a monotonic trend at the 5% significance level.

This result represents the selected NASA POWER grid point, not the whole of Nigeria.

---

# SLIDE 6 — NASA DATA AND TECHNOLOGY

**NASA Data Source**

NASA POWER Monthly Point API

Variables:
- T2M — Air temperature at 2 metres.
- PRECTOTCORR — Corrected precipitation.
- RH2M — Relative humidity.

**Technologies**
- HTML
- CSS
- JavaScript
- Chart.js
- NASA POWER API

**Scientific considerations**

NASA POWER meteorological data are gridded estimates, not direct local weather-station measurements. The Mann–Kendall test does not adjust for serial correlation.

---

# SLIDE 7 — IMPACT AND CONCLUSION

**Making environmental data accessible**

EarthScope 360 demonstrates how open NASA data can support:

- Environmental awareness.
- Climate education.
- Data literacy.
- Exploration of historical environmental changes.

**Explore our project**

Website:
https://kingabdulfx.github.io/EarthScope360/

GitHub:
https://github.com/KINGABDULFX/EarthScope360

**SAHEL EARTHLAB**

Understanding Earth's changing signals, one dataset at a time.
