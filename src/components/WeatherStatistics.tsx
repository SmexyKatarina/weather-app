import React from "react";

import '../css/weatherStats.css';

const WeatherStatistics = (
        props: { 
            weatherStats: { 
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
            } 
        }
    ) => {

    const { latitude, longitude, timezone, timezone_abbreviation, elevation, current, hourly } = props.weatherStats;

    const currentWeather = { ...current };
    const hourlyWeather = { ...hourly };

    const generateHourly = () => {

        let hourlyElements = [];

        for (let i = 0; i < hourlyWeather.time.length; i++) 
        {
            let {time, temp, apparent, wind} = { time: hourlyWeather.time[i], temp: hourlyWeather.temperature_2m[i], apparent: hourlyWeather.apparent_temperature[i], wind: hourlyWeather.wind_speed_10m[i] };
            hourlyElements.push((
                <div className="hour-tile" key={i}>
                    <div className="hour-time">{time.split("T").join(" ")}</div>
                    <div className="hour-temp">Temp: {Math.round(temp)}°C<br/>(Feels Like: {Math.round(apparent)}°C)</div>
                    <div className="hour-wind">Wind Speed: {Math.round(wind)}Km/h</div>
                </div>
            ));
            
        }
        return hourlyElements;
    }

    return (
        <div id="weather-statistics" style={{ display: "none" }}>
            <div className="location">Location: {latitude}°N {longitude}°E with an elevation of {elevation}m {(elevation < 0) ? "below" : "above"}</div>
            <div className="timezone">Data generated at: {currentWeather.time.split("T").join(" ") + " " + timezone_abbreviation} ({timezone})</div>
            <div className="current-weather">
                <div>Current Weather</div>
                <div className="current-temp">Temp: {Math.round(currentWeather.temperature_2m)}°C (Feels like: {Math.round(currentWeather.apparent_temperature)}°C)</div>
                <div className="current-wind">Wind Speed: {Math.round(currentWeather.wind_speed_10m)}Km/h</div>
            </div>
            <div className="day-chooser">
            </div>
            <div className="hourly-weather">
                <div id="hourly-container">
                    {generateHourly().map(x => { return x; })}
                </div>
                <p className="disclaimer">Note: This is every 3 hours not every hour.</p>
            </div>
        </div>
    );
}

export default WeatherStatistics;