EARTHSCOPE 360 — NASA SPACE APPS 2026 PROJECT PACK
=================================================

WHAT THIS IS
A browser-based prototype for the 2026 NASA Space Apps challenge
"Be An Earth System Trend Detective!"

CURRENT IMPLEMENTATION
- Location selector with Gombe, Bauchi, Kano, Lagos and Abuja.
- Variable selector: temperature (T2M), corrected precipitation (PRECTOTCORR),
  and relative humidity (RH2M).
- Fetches monthly historical values from the NASA POWER Monthly Point API.
- Aggregates monthly values into annual means.
- Plots the annual time series and an ordinary least-squares linear trend.
- Calculates a Mann–Kendall S statistic and approximate two-sided p-value.
- Explains results with an important model-data caveat.

HOW TO RUN
1. Extract the ZIP file.
2. Connect the laptop to the internet.
3. Open index.html in Chrome, Edge or Firefox.
4. Select Gombe, a variable and a year range.
5. Click "Analyze NASA data".
No Python installation, server, API key or build step is required.
Chart.js is loaded from a CDN, so internet is needed for the chart library and NASA API.

IMPORTANT SCIENTIFIC LIMITATIONS
- NASA POWER meteorological data are gridded model/reanalysis-derived estimates,
  not direct station observations. Explain this in the demo.
- The trend slope is OLS on annual averages. The Mann–Kendall calculation is a
  basic uncorrected approximation; serial correlation and ties are not adjusted.
- Statistical significance does not establish causation.
- The Gombe temperature analysis for 2001-2025 has been successfully in a browser. 
- NASA POWER monthly meteorological data begin in 1981. This prototype caps end year
  at 2025 to avoid requesting an incomplete current year.

DATA AND CHALLENGE
NASA POWER Monthly API:
https://power.larc.nasa.gov/docs/services/api/temporal/monthly/
Official challenge:
https://www.spaceappschallenge.org/2026/challenges/earth-system-trend-detective/

TEAM FIELDS TO COMPLETE
Team name: SAHEL EARTHLAB
Team members: ABDULSHAKUR UMAR AHMAD,DAUDA ALIYU ADAMU,AMINU SAYOJI MUHAMMED 
Local event: Gombe, Nigeria
Project lead: ABDULSHAKUR UMAR AHMAD
GitHub/demo URL: https://kingabdulfx.gihub.io/EarhScope360/
