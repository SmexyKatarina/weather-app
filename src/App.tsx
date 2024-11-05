import React, { useState } from 'react';
import './App.css';

import { BerlinWeather } from './data/MockData';
import Header from "./components/Header";
import Footer from "./components/Footer";

//import { fetchWeatherApi } from 'openmeteo';
import WeatherStatistics from './components/WeatherStatistics';

function App() {

	const [location, setLocation] = useState({ lat: 0, long: 0 });

	const [weatherInformation, setWeatherInformation] = useState({ latitude: 0, longitude: 0, timezone: "GMT", timezone_abbreviation: "GMT", elevation: 0, current: { time: "2024-01-01T00:00", temperature_2m: 0, apparent_temperature: 0, wind_speed_10m: 0 }, hourly: { time: ["2024-01-01T00:00"], temperature_2m: [0], apparent_temperature: [0], wind_speed_10m: [0] } });

	const getWeatherInformation = () => {

		// SEND API CALL HERE AND CHANGE METHOD TO ASYNC
		/*

		const BASE_URL = "https://api.open-meteo.com/v1/forecast?";

		const QUERY = {
			"latitude": location.lat,
			"longitude": location.long,
			"current": ["temperature_2m", "apparent_temperature", "wind_speed_10m"],
			"hourly": ["temperature_2m", "apparent_temperature", "wind_speed_10m"],
			"timezone": auto,
			"temporal_resolution": "hourly_3"
		}

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
