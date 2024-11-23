import React, { useEffect, useState } from 'react';
import './App.css';

import { BerlinWeather } from './data/MockData';
import Header from "./components/Header";
import SideList from './components/SideList';
import SideListItem from './components/SideListItem';
import Footer from "./components/Footer";

// import { fetchWeatherApi } from 'openmeteo';
import WeatherStatistics from './components/WeatherStatistics';

function App() {

	const [location, setLocation] = useState({ lat: 0, long: 0 });

	const [previousLocations, setPreviousLocations] = useState([{ lat: 0, long: 0 }]);

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

	const [previousWeatherInformation, setPreviousWeatherInformation] = useState([{
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
	}]);

	useEffect(() => {
		setPreviousLocations([]);
	}, []);

	const addPreviousLocation = (location: { lat: number, long: number }) => {
		for (let i = 0; i < previousLocations.length; i++) {
			if (previousLocations[i].lat === location.lat && previousLocations[i].long === location.long) return;
		}
		
		setPreviousLocations((prev) => [location, ...prev]);

		if (previousLocations.length >= 5) {
			setPreviousLocations((prev) => prev.filter((_, i) => i !== 5));
		}
	}

	const addPreviousWeatherInformation = (info: {
		"latitude": number,
		"longitude": number,
		"timezone": string,
		"timezone_abbreviation": string,
		"elevation": number,
		"current_units": {
			"time": string,
			"interval": string,
			"temperature_2m": string,
			"apparent_temperature": string,
			"precipitation": string,
			"wind_speed_10m": string
		},
		"current": {
			"time": string,
			"temperature_2m": number,
			"apparent_temperature": number,
			"precipitation": number,
			"wind_speed_10m": number
		},
		"hourly_units": {
			"time": string,
			"temperature_2m": string,
			"apparent_temperature": string,
			"precipitation_probability": string,
			"precipitation": string,
			"cloud_cover": string,
			"wind_speed_10m": string
		},
		"hourly": {
			"time": string[],
			"temperature_2m": number[],
			"apparent_temperature": number[],
			"precipitation_probability": number[],
			"precipitation": number[],
			"cloud_cover": number[],
			"wind_speed_10m": number[]
		},
		"daily_units": {
			"time": string,
			"sunrise": string,
			"sunset": string
		},
		"daily": {
			"time": string[],
			"sunrise": string[],
			"sunset": string[]
		}
	}) => {
		for (let i = 0; i < previousWeatherInformation.length; i++) {
			if (previousWeatherInformation[i].latitude === location.lat && previousWeatherInformation[i].longitude === location.long) return;
		}

		const prev = previousWeatherInformation;
		prev.unshift(info);

		setPreviousWeatherInformation(prev);
	}


	/**
	 * A method to check the previously gathered weather information to see if something is within range.
	 * @param {object} location The location to check inside of the method.
	 * @param {number} range The range around the previous lat and long coordinates to check for.
	 * @returns {({}|false)} The desired information being checked or false if none was found.
	 */
	const containsWeatherInfo = (location: { lat: number, long: number }, range: number) => {
		const locations = previousWeatherInformation.map((x, i) => { return { lat: Math.floor(x.latitude), long: Math.floor(x.longitude), index: i }; });

		for (let i = 0; i < locations.length; i++) {
			const check = locations[i];
			const latBounds = check.lat - range >= Math.floor(location.lat) && Math.floor(location.lat) <= check.lat + range;
			const longBounds = check.long - range >= Math.floor(location.long) && Math.floor(location.long) <= check.long + range; 
			if (latBounds && longBounds) {
				return previousWeatherInformation[check.index];
			}
		}
		return false;
	}

	const getWeatherInformation = () => {

		// SEND API CALL HERE AND CHANGE METHOD TO ASYNC
		
		let check: {
			"latitude": number,
			"longitude": number,
			"timezone": string,
			"timezone_abbreviation": string,
			"elevation": number,
			"current_units": {
				"time": string,
				"interval": string,
				"temperature_2m": string,
				"apparent_temperature": string,
				"precipitation": string,
				"wind_speed_10m": string
			},
			"current": {
				"time": string,
				"temperature_2m": number,
				"apparent_temperature": number,
				"precipitation": number,
				"wind_speed_10m": number
			},
			"hourly_units": {
				"time": string,
				"temperature_2m": string,
				"apparent_temperature": string,
				"precipitation_probability": string,
				"precipitation": string,
				"cloud_cover": string,
				"wind_speed_10m": string
			},
			"hourly": {
				"time": string[],
				"temperature_2m": number[],
				"apparent_temperature": number[],
				"precipitation_probability": number[],
				"precipitation": number[],
				"cloud_cover": number[],
				"wind_speed_10m": number[]
			},
			"daily_units": {
				"time": string,
				"sunrise": string,
				"sunset": string
			},
			"daily": {
				"time": string[],
				"sunrise": string[],
				"sunset": string[]
			}
		}|false;
		if (check = containsWeatherInfo(location, 2)) {
			setWeatherInformation(check);
			addPreviousWeatherInformation(check);
		} else {
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
			addPreviousWeatherInformation(response);
			*/
		}

		addPreviousWeatherInformation(weatherInformation);

		setWeatherInformation(BerlinWeather);

		const el = document.getElementById("weather-statistics");
		if (el) el.style.display = "block";
	}

	return (
		<div className="App">
			<Header location={location} setLocation={setLocation} getWeatherInformation={getWeatherInformation} addPreviousLocation={addPreviousLocation}/>
			<div className="sidelists">
				<SideList name="Previous Locations">
					{previousLocations.map((x, i) => {
						return (
							<SideListItem text={x.lat + ", " + x.long} action={() => {
								setLocation({lat: x.lat, long: x.long});
							}} key={i}/>
						);
					})}
				</SideList>
			</div>
			<WeatherStatistics weatherStats={weatherInformation}/>
			<Footer />
		</div>
	);
}

export default App;
