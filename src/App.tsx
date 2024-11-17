import React, { useState } from 'react';
import './App.css';

import { BerlinWeather } from './data/MockData';
import Header from "./components/Header";
import Footer from "./components/Footer";

// import { fetchWeatherApi } from 'openmeteo';
import WeatherStatistics from './components/WeatherStatistics';

function App() {

	const [location, setLocation] = useState({ lat: 0, long: 0 });

	const [weatherInformation, setWeatherInformation] = useState({ 
		"latitude": 0, 
		"longitude": 0, 
		"timezone": "GMT", 
		"timezone_abbreviation": "GMT", 
		"elevation": 0,
		"current_units": {
			"time": "iso8601",
			"interval": "seconds",
			"temperature_2m": "°C",
			"apparent_temperature": "°C",
			"precipitation": "mm",
			"wind_speed_10m": "km/h"
		},
		"current": { 
			"time": "2024-01-01T00:00", 
			"temperature_2m": 0, 
			"apparent_temperature": 0, 
			"precipitation": 0,
			"wind_speed_10m": 0
		},
		"hourly_units": {
			"time": "iso8601",
			"temperature_2m": "°C",
			"apparent_temperature": "°C",
			"precipitation_probability": "%",
			"precipitation": "mm",
			"cloud_cover": "%",
			"wind_speed_10m": "km/h"
		},
		"hourly": { 
			"time": ["2024-01-01T00:00"], 
			"temperature_2m": [0], 
			"apparent_temperature": [0], 
			"precipitation_probability": [0],
			"precipitation": [0],
			"cloud_cover": [0],
			"wind_speed_10m": [0] 
		},
		"daily_units": {
			"time": "iso8601",
			"sunrise": "iso8601",
			"sunset": "iso8601"
		},
		"daily": {
			"time": [
				"2024-01-01",
			],
			"sunrise": [
				"2024-01-01T00:00",
			],
			"sunset": [
				"2024-01-01T00:00"
			]
		}
	});

	const getWeatherInformation = () => {

		// SEND API CALL HERE AND CHANGE METHOD TO ASYNC
		/*

		const BASE_URL = "https://api.open-meteo.com/v1/forecast?";

		const QUERY = {
			"latitude": 52.52,
			"longitude": 13.41,
			"current": ["temperature_2m", "apparent_temperature", "precipitation", "wind_speed_10m"],
			"hourly": ["temperature_2m", "apparent_temperature", "precipitation_probability", "precipitation", "cloud_cover", "wind_speed_10m"],
			"daily": ["sunrise", "sunset"],
			"timezone": "auto",
			"temporal_resolution": "hourly_3"
		};

		const res = await fetchWeatherApi(BASE_URL, QUERY);
		const response = res[0];

		setWeatherInformation(response);

		*/

		setWeatherInformation(BerlinWeather);
		const el = document.getElementById("weather-statistics");
		if (el) el.style.display = "block";
	}

	return (
		<div className="App" >
			<Header location={location} setLocation={setLocation} getWeatherInformation={getWeatherInformation}/>
			<WeatherStatistics weatherStats={weatherInformation}/>
			<Footer />
		</div>
	);
}

export default App;
