# EarthScope 360 — Discovering Earth's Changing Signals

**Selected challenge:** Be An Earth System Trend Detective!

## Problem
Earth science data are extensive, but many students and members of the public lack an accessible way to select an environmental variable, explore a location over time, visualize its behaviour and test whether an apparent trend is statistically meaningful.

## Our solution
EarthScope 360 is a lightweight browser-based data exploration prototype. Users select a Nigerian study location, choose a NASA POWER meteorological variable and define a historical period. The application retrieves monthly values from NASA POWER, calculates annual averages, plots the time series, estimates a linear rate of change and performs a basic Mann–Kendall trend test. It then presents a plain-language interpretation.

## Challenge connection
The project addresses the challenge's core objectives: selecting Earth-system variables, acquiring data for a region, generating a time series, visualizing change, estimating the rate of change and testing trend significance.

## NASA data usage
The prototype uses the NASA POWER Monthly Point API. Variables currently supported are:
- T2M — temperature at 2 metres
- PRECTOTCORR — corrected precipitation
- RH2M — relative humidity at 2 metres

NASA POWER documentation: https://power.larc.nasa.gov/docs/services/api/temporal/monthly/

Meteorological variables are derived from NASA GMAO MERRA-2. These are gridded model/reanalysis-based estimates and are not presented as direct weather-station observations.

## Technical approach
- HTML, CSS and JavaScript frontend
- NASA POWER API for data retrieval
- Chart.js for time-series visualization
- Ordinary least-squares regression for linear trend rate
- Basic Mann–Kendall test for monotonic trend significance

## Impact
The prototype demonstrates how open Earth-observation and model data can support local climate awareness and data literacy. Gombe is the default study location, while other Nigerian locations can be selected for comparison in separate runs.

## Current limitations
The prototype has not yet been verified on the team's laptop. Its Mann–Kendall implementation is an uncorrected approximation and does not adjust for serial correlation or ties. NASA POWER grid estimates should not be treated as local station measurements. Results do not establish causation.

## AI-use declaration
ChatGPT was used as a development aid to help structure the project concept, draft explanatory text and generate portions of the prototype code. Team members must review, understand, test and modify the code, verify data outputs, and accurately describe their own contributions before submission. No NASA logo or NASA branding was generated or altered using AI.
