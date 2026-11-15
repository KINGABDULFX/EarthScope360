# EarthScope 360 — Discovering Earth's Changing Signals

**NASA Space Apps Challenge 2026**

**Challenge:** Be An Earth System Trend Detective!

**Team Name:** SAHEL EARTHLAB

**Project Lead:** Abdushukur Umar Ahmad

**Local Event:** Gombe, Nigeria

## 1. Project Overview

EarthScope 360 is a web-based environmental data exploration and trend analysis platform developed to help users investigate long-term changes in Earth's climate-related variables across selected locations in Nigeria.

The project uses historical NASA POWER data to make environmental information easier to access, visualize, and interpret. Users can select a Nigerian location, choose an environmental variable, and examine historical patterns through interactive charts and statistical analysis.

## 2. Problem Statement

Understanding long-term environmental changes requires access to reliable historical data and tools for interpreting trends.

However, environmental datasets can be difficult for students, researchers, and the general public to access and analyze. Without simple visualization and statistical tools, identifying possible changes over time can be challenging.

EarthScope 360 addresses this problem by providing a straightforward platform for exploring historical environmental data.

## 3. Our Solution

EarthScope 360 allows users to:

- Select from supported Nigerian locations, including Gombe, Bauchi, Kano, Lagos, and Abuja.
- Choose an environmental variable for analysis.
- Retrieve historical monthly data from NASA POWER.
- View annual averages through interactive charts.
- Estimate long-term linear trends.
- Apply the Mann–Kendall statistical test to investigate monotonic trends.
- View explanations and limitations alongside the results.

## 4. NASA Data and Its Application

The project uses the NASA POWER (Prediction Of Worldwide Energy Resources) data service.

The selected environmental variables include:

- **T2M:** Temperature at 2 metres, measured in degrees Celsius.
- **PRECTOTCORR:** Corrected precipitation, measured in millimetres per day.
- **RH2M:** Relative humidity at 2 metres, measured in percentage.

The platform retrieves monthly data for selected coordinates and supports analysis across the period 1981–2025.

These data are gridded, model-based estimates and should not be interpreted as direct measurements from local weather stations.

## 5. Technical Approach

EarthScope 360 is developed using:

- HTML for page structure.
- CSS for interface design.
- JavaScript for application logic and analysis.
- NASA POWER API for environmental data retrieval.
- Chart.js for interactive data visualization.

The application converts monthly observations into day-weighted annual averages, accounting for differences in month lengths and leap years.

It then estimates a linear trend using regression and applies a tie-corrected Mann–Kendall test to examine whether a monotonic trend is statistically supported.

The Mann–Kendall p-value is approximate, and the current implementation does not adjust for serial correlation.

## 6. Example Analysis

During testing, EarthScope 360 was used to analyze 2-metre air temperature for Gombe, Nigeria, from 2001 to 2025.

The example analysis produced:

- **Estimated linear trend:** +0.0309 °C per year.
- **Mann–Kendall approximate p-value:** 0.1831.
- **Interpretation:** The result does not provide sufficient statistical evidence of a monotonic trend at the 5% significance level.

This result applies only to the selected NASA POWER grid point and analysis period. It should not be generalized to all of Nigeria.

## 7. Project Impact

EarthScope 360 makes NASA environmental data more accessible and understandable.

It can support environmental learning, data exploration, preliminary research, and public awareness of long-term environmental patterns.

By combining open NASA data, interactive visualization, and statistical analysis, the project demonstrates how accessible technology can help people investigate Earth's changing systems.

## 8. Limitations and Future Improvements

The platform has some limitations:

- NASA POWER data are gridded estimates, not direct local station observations.
- Statistical results do not establish causation.
- The current Mann–Kendall implementation does not adjust for serial correlation.
- Results depend on the selected coordinates, variable, and time period.

Future improvements could include additional environmental datasets, more locations, improved statistical methods, and expanded comparisons between environmental variables.

## 9. Project Links

**Live Website:** https://kingabdulfx.github.io/EarthScope360/

**GitHub Repository:** https://github.com/KINGABDULFX/EarthScope360

## 10. AI Tool Disclosure

AI tools were used as supportive resources during development. The project team reviewed, tested, and evaluated the implementation.
