# Welcome to the Weather App

A simple app that can be used to search specific coordinates (latitude and longitude) to see the current weather (present and near future). All that is needed is to enter a set of coordinates into the 'Latitude' and 'Longitude' input boxes and hit 'Get My Weather'. It will list certain information about the location currently, within a few hours and days.

## How does it work?

It uses an API from [OpenMeteo](open-meteo.com), which is a free-to-use weather data collection API. It has a bunch of historical data dating back 80 years to the present and has a very wide range of differnet data types to choose from. 

It uses the Latitude and Longitude coordinates given and data is requested from their API. If it so happens that there is no possible way to fetch (there is a limited API requests daily), there will be already stored data (not up to date, just for ease of use and make sure that it can still function regardless).

You can check out their website and documentation here: [OpenMeteo Documentation](https://open-meteo.com/en/docs)

## How to run

You can download the source code and run it in a terminal:

1. Download the source code into a file
2. Open up a terminal and navigate to the directory containing all the files.
3. Install all dependencies (`npm install`)
4. After it is finished installing, run `npm start`
5. A new tab will be opened containing the website! Enjoy! 