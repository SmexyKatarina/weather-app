import React, { useState } from "react";

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

    const { latitude, longitude, timezone, timezone_abbreviation, elevation, current_units, current, hourly_units, hourly, daily_units, daily } = props.weatherStats;

    const currentWeather = { ...current, units: { ...current_units } };
    const hourlyWeather = { ...hourly, units: { ...hourly_units } };
    const dailyWeather = { ...daily, units: { ...daily_units } };

    const formatTo12Hour = (time: string) => {
        let split = time.split(":").map(x => parseInt(x));
        const afternoon = split[0] >= 12;
        if (split[0] === 0) split[0] = 12;
        else if (split[0] > 12) split[0] -= 12;
        return split[0] + ":" + (split[1] ? split[1] < 10 ? "0" + split[1] : split[1] : "00") + (afternoon ? "PM" : "AM");
    }

    const generateHourly = () => {

        let hourlyElements = [];

        let hourArray = [];
        
        for (let i = 0; i < hourlyWeather.time.length; i++) 
        {
            let {time, temp, apparent, wind} = { time: hourlyWeather.time[i], temp: hourlyWeather.temperature_2m[i], apparent: hourlyWeather.apparent_temperature[i], wind: hourlyWeather.wind_speed_10m[i] };
            hourArray.push((
                <div className="hour-tile" key={i}>
                    <div className="hour-time">{formatTo12Hour(time.split("T")[1])}</div>
                    <div className="hour-temp">Temp: {Math.round(temp)}{hourlyWeather.units.temperature_2m}<br/>(Feels Like: {Math.round(apparent)}{hourlyWeather.units.temperature_2m})</div>
                    <div className="hour-wind">Wind Speed: {Math.round(wind)} {hourlyWeather.units.wind_speed_10m}</div>
                </div>
            ));
            if (hourArray.length === 8) {
                hourlyElements.push(hourArray);
                hourArray = [];
            } 
        }
        if (hourArray.length < 8) hourlyElements.push(hourArray);
        return hourlyElements;
    }

    const generateDayArray = () => {
        let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let spliced = [ ...dayArray.splice(new Date().getDay()), ...dayArray];
        return [ "Today", "Tomorrow", ...spliced.splice(2)];
    }

    const onChangeDay = (target: EventTarget & HTMLButtonElement) => {
        let element = document.querySelector(`button[value="${currentDay}"]`);
        if (element) element.className = "day-button";
        setCurrentDay(parseInt(target.value));
        target.className = "day-button-active";
    }

    const dayArray = generateDayArray();
    const hourlyArray = generateHourly();
    const [currentDay, setCurrentDay] = useState(0);

    return (
        <div id="weather-statistics" style={{ display: "none" }}>
            <div className="location">Location: {latitude}°N {longitude}°E with an elevation of {elevation}m {(elevation < 0) ? "below" : "above"} sea level</div>
            <div className="timezone">Data generated at: {currentWeather.time.split("T").join(" ") + " " + timezone_abbreviation} ({timezone})</div>
            <div className="current-weather">
                <div>Current Weather</div>
                <div className="current-temp">Temp: {Math.round(currentWeather.temperature_2m)}°C (Feels like: {Math.round(currentWeather.apparent_temperature)}°C)</div>
                <div className="current-wind">Wind Speed: {Math.round(currentWeather.wind_speed_10m)}Km/h</div>
            </div>
            <div className="daily-weather">
                <div>Sunrise: {formatTo12Hour(dailyWeather.sunrise[currentDay].split("T")[1])}</div>
                <div>Sunset: {formatTo12Hour(dailyWeather.sunset[currentDay].split("T")[1])}</div>
            </div>
            <div className="separator"></div>
            <div id="day-chooser">
                {dayArray.map((x, i) => {
                    return (
                        <button className={"day-button" + (i === 0 ? "-active" : "")} key={i} value={i} onClick={(e) => { onChangeDay(e.currentTarget); }}>{x}</button>
                    );
                })}
            </div>
            <div className="hourly-weather">
                <div id="hourly-container">
                    {hourlyArray[currentDay].map(x => { return x; })}
                </div>
                <p className="disclaimer">Note: This is every 3 hours not every hour.</p>
            </div>
        </div>
    );
}

export default WeatherStatistics;