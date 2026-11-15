
# EarthScope 360 — Discovering Earth's Changing Signals

**Selected NASA Space Apps Challenge:** Be An Earth System Trend Detective!

## 1. Problem

Earth science data contain valuable information about environmental changes, but many students and members of the public find it difficult to retrieve, analyze, visualize and interpret long-term environmental trends.

## 2. Our Solution

EarthScope 360 is a browser-based environmental data exploration application that helps users investigate changes in temperature, precipitation and relative humidity across selected Nigerian locations.

Users can select a location, environmental variable and historical period. The application retrieves monthly data directly from NASA POWER, calculates day-weighted annual averages, visualizes the results and estimates the direction and rate of change.

It also applies linear regression and a tie-corrected Mann–Kendall test to examine whether the observed data show evidence of a monotonic trend.

## 3. Connection to the Challenge

EarthScope 360 supports the objectives of the Earth System Trend Detective challenge by making it easier to:

- Select Earth-system variables.
- Retrieve historical environmental data.
- Explore changes over time.
- Visualize annual trends.
- Estimate the rate of environmental change.
- Examine the statistical significance of observed trends.

## 4. NASA Data Sources

The application uses the NASA POWER Monthly Point API.

Supported variables include:

- T2M — Air temperature at 2 metres.
- PRECTOTCORR — Corrected precipitation.
- RH2M — Relative humidity at 2 metres.

NASA POWER documentation:
https://power.larc.nasa.gov/docs/services/api/temporal/monthly/

The meteorological data are gridded model/reanalysis-derived estimates and should not be interpreted as direct measurements from local weather stations.

## 5. Technical Implementation

EarthScope 360 was developed using:

- HTML for application structure.
- CSS for interface design.
- JavaScript for data processing and analysis.
- NASA POWER API for environmental data retrieval.
- Chart.js for interactive time-series visualization.
- Ordinary Least Squares regression for estimating linear trends.
- Tie-corrected Mann–Kendall testing for examining monotonic trends.

Monthly observations are aggregated into day-weighted annual averages, accounting for differences in month lengths and leap years.

## 6. Demonstration Result

A test using Gombe, Nigeria, for mean air temperature from 2001 to 2025 produced an estimated trend of approximately +0.0309 °C per year.

The tie-corrected Mann–Kendall test produced an approximate p-value of 0.1831. This does not provide sufficient evidence of a monotonic trend at the 5% significance level.

This result applies only to the selected NASA POWER grid point and period.

## 7. Expected Impact

EarthScope 360 demonstrates how accessible NASA environmental data can support climate awareness, environmental education and data literacy.

By focusing on Nigerian locations, the application provides an accessible starting point for exploring environmental changes within local communities.

## 8. Limitations

- NASA POWER data are gridded estimates, not direct local weather-station measurements.
- The Mann–Kendall test does not adjust for serial correlation.
- Statistical significance does not establish causation.
- Results should be interpreted within the selected location and historical period.
