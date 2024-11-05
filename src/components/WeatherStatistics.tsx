import React from "react";

import '../css/weatherStats.css';

const WeatherStatistics = (props: { weatherStats: { latitude: number, longitude: number, timezone: string, timezone_abbreviation: string, elevation: number, current: { time: string, temperature_2m: number, apparent_temperature: number, wind_speed_10m: number }, hourly: { time: string[], temperature_2m: number[], apparent_temperature: number[], wind_speed_10m: number[]} } }) => {

    const { latitude, longitude, timezone, timezone_abbreviation, elevation, current, hourly } = props.weatherStats;

    const currentWeather = { ...current };
    const hourlyWeather = { ...hourly };

    const generateHourly = () => {

        let hourlyElements = [];

        for (let i = 0; i < hourlyWeather.time.length; i++) 
        {
            let {time, temp, apparent, wind} = { time: hourlyWeather.time[i], temp: hourlyWeather.temperature_2m[i], apparent: hourlyWeather.apparent_temperature[i], wind: hourlyWeather.wind_speed_10m[i] };
            hourlyElements.push((
                <div className="hour-tile">
                    <div className="hour-time">{time.split("T").join(" ")}</div>
                    <div className="hour-temp">Temp: {Math.round(temp)}°C<br/>(Feels Like: {Math.round(apparent)}°C)</div>
                    <div className="hour-wind">Wind Speed: {Math.round(wind)}Km/h</div>
                </div>
            ))
            
        }
        return hourlyElements;
    }

    return (
        <div id="weather-statistics" style={{ display: "none" }}>
            <div className="location">Location: {latitude}°N {longitude}°E with an elevation of {elevation}m {(elevation < 0) ? "below" : "above"}</div>
            <div className="timezone">Time: {currentWeather.time.split("T").join(" ") + " " + timezone_abbreviation} ({timezone})</div>
            <div className="current-weather">
                <div>Current Weather</div>
                <div className="current-temp">Temp: {Math.round(currentWeather.temperature_2m)}°C (Feels like: {Math.round(currentWeather.apparent_temperature)}°C)</div>
                <div className="current-wind">Wind Speed: {Math.round(currentWeather.wind_speed_10m)}Km/h</div>
            </div>
            <div className="hourly-weather">
                {generateHourly().map(x => { return x; })}
                <p className="disclaimer">Note: This is every 3 hours not every hour.</p>
            </div>
        </div>
    );
}

export default WeatherStatistics;