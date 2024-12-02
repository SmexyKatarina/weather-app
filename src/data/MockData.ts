/*
    This is mock data and replacement data incase for an increase of API calls. This contains the major cities across the world
    and their relative data at a specific date/time. 

    THIS DATA MAY OR MAY NOT BE UP TO DATE. THIS IS PURELY TO ENSURE THE CORRECT FUNCTIONALITY OF THE APP AT ALL TIMES AND FOR ANY TESTING
    OF THE WEBSITE.

    
*/

import { checkBounds } from "../App";

export const BerlinWeather = {
    "name": "Berlin",
    "latitude": 52.52,
    "longitude": 13.419998,
    "generationtime_ms": 0.265002250671387,
    "utc_offset_seconds": 3600,
    "timezone": "Europe/Berlin",
    "timezone_abbreviation": "CET",
    "elevation": 38,
    "current_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature_2m": "°C",
        "apparent_temperature": "°C",
        "precipitation": "mm",
        "wind_speed_10m": "km/h"
    },
    "current": {
        "time": "2024-11-14T20:45",
        "interval": 900,
        "temperature_2m": 6.8,
        "apparent_temperature": 4.6,
        "precipitation": 0,
        "wind_speed_10m": 7.9
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
        "time": [
            "2024-11-14T00:00",
            "2024-11-14T03:00",
            "2024-11-14T06:00",
            "2024-11-14T09:00",
            "2024-11-14T12:00",
            "2024-11-14T15:00",
            "2024-11-14T18:00",
            "2024-11-14T21:00",
            "2024-11-15T00:00",
            "2024-11-15T03:00",
            "2024-11-15T06:00",
            "2024-11-15T09:00",
            "2024-11-15T12:00",
            "2024-11-15T15:00",
            "2024-11-15T18:00",
            "2024-11-15T21:00",
            "2024-11-16T00:00",
            "2024-11-16T03:00",
            "2024-11-16T06:00",
            "2024-11-16T09:00",
            "2024-11-16T12:00",
            "2024-11-16T15:00",
            "2024-11-16T18:00",
            "2024-11-16T21:00",
            "2024-11-17T00:00",
            "2024-11-17T03:00",
            "2024-11-17T06:00",
            "2024-11-17T09:00",
            "2024-11-17T12:00",
            "2024-11-17T15:00",
            "2024-11-17T18:00",
            "2024-11-17T21:00",
            "2024-11-18T00:00",
            "2024-11-18T03:00",
            "2024-11-18T06:00",
            "2024-11-18T09:00",
            "2024-11-18T12:00",
            "2024-11-18T15:00",
            "2024-11-18T18:00",
            "2024-11-18T21:00",
            "2024-11-19T00:00",
            "2024-11-19T03:00",
            "2024-11-19T06:00",
            "2024-11-19T09:00",
            "2024-11-19T12:00",
            "2024-11-19T15:00",
            "2024-11-19T18:00",
            "2024-11-19T21:00",
            "2024-11-20T00:00",
            "2024-11-20T03:00",
            "2024-11-20T06:00",
            "2024-11-20T09:00",
            "2024-11-20T12:00",
            "2024-11-20T15:00",
            "2024-11-20T18:00",
            "2024-11-20T21:00"
        ],
        "temperature_2m": [3.3, 2.9, 3.6, 5.4, 8.1, 8.4, 7.7, 6.8, 6.2, 5.6, 4.9, 4.5, 7.4, 8.8, 8.7, 8.5, 8.1, 7.5, 5.1, 4.1, 7.5, 8.2, 6.3, 6, 5.3, 5, 5.1, 5.5, 7, 7.1, 5.9, 5.6, 4.9, 4.3, 4.5, 4.7, 5.7, 6, 4.7, 3.5, 3.7, 5.5, 6.6, 7, 7.5, 8.4, 8, 4.5, 2.8, 2.8, 2.6, 3, 4, 4.2, 2.1, 0.7],
        "apparent_temperature": [0.9, -0.2, 0.9, 3.1, 5.6, 5.4, 5.1, 4.5, 4.1, 3.5, 2.7, 2, 4.9, 6.5, 6.4, 6, 5.7, 5, 2.6, 1.2, 4.3, 5, 3, 2.7, 1.7, 1.5, 1.8, 2.3, 3.4, 3, 2.1, 1.7, 0.5, -0.4, -0.3, -0.2, 0.7, 1.3, 0.9, -0.2, 0.3, 2.1, 2.6, 2.9, 3.8, 4.7, 3.2, -1.1, -2.8, -2.2, -2.3, -1.7, -1.2, -1.1, -3, -3.5],
        "precipitation_probability": [0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 27, 62, 83, 73, 44, 33, 31, 24, 15, 13, 15, 13, 9, 17, 34, 43, 48, 55, 62, 61, 54, 55, 55, 55, 54, 51, 48, 44, 41, 39, 38, 37],
        "precipitation": [0, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.1, 1.5, 0.7, 0.5, 0.4, 0.2, 0.3, 0.1, 0, 0.8, 0.4, 0, 0, 0, 0.8, 1.2, 2.4, 1.4, 0.6, 1.4, 1.2, 0.8, 0.6, 0.2, 0, 0, 0.4, 0.8, 0.3, 0.6, 0.9],
        "cloud_cover": [96, 100, 100, 100, 100, 100, 100, 100, 91, 91, 79, 69, 96, 93, 100, 100, 100, 88, 82, 0, 5, 76, 100, 100, 98, 99, 100, 100, 80, 51, 99, 98, 97, 99, 97, 98, 90, 95, 100, 100, 100, 100, 100, 100, 99, 100, 95, 96, 91, 93, 99, 100, 100, 100, 95, 97],
        "wind_speed_10m": [5.6, 8.9, 7.4, 7.6, 11.2, 12.6, 9.6, 8, 6.9, 6.7, 6.1, 6.7, 9.1, 8.3, 9.9, 10.4, 9.8, 9.5, 7.4, 8.8, 11.5, 12.3, 12.4, 12.3, 13.9, 13.8, 12.3, 13, 15.1, 15.7, 14.7, 15, 17.5, 18.9, 19.4, 19.7, 20, 16.8, 12.7, 12.4, 11.9, 14.2, 17.9, 18.5, 17.3, 18.1, 21.4, 23.4, 22.4, 18.9, 18.7, 18.5, 21.1, 20.8, 19, 13.3]
    },
    "daily_units": {
        "time": "iso8601",
        "sunrise": "iso8601",
        "sunset": "iso8601"
    },
    "daily": {
        "time": [
            "2024-11-14",
            "2024-11-15",
            "2024-11-16",
            "2024-11-17",
            "2024-11-18",
            "2024-11-19",
            "2024-11-20"
        ],
        "sunrise": [
            "2024-11-14T07:27",
            "2024-11-15T07:29",
            "2024-11-16T07:30",
            "2024-11-17T07:32",
            "2024-11-18T07:34",
            "2024-11-19T07:36",
            "2024-11-20T07:37"
        ],
        "sunset": [
            "2024-11-14T16:14",
            "2024-11-15T16:12",
            "2024-11-16T16:11",
            "2024-11-17T16:10",
            "2024-11-18T16:08",
            "2024-11-19T16:07",
            "2024-11-20T16:06"
        ]
    }
}

export const MockLocations = [
    { name: "Quebec City, QC", lat: 46.8131, long: -71.2075 },
    { name: "Toronto, ON", lat: 43.6532, long: -79.3832 },
    { name: "Edmonton, AB", lat: 53.5461, long: -113.4937 },
    { name: "Victoria, BC", lat: 48.4284, long: -123.3656 },
    { name: "Frederiction, NB", lat: 45.9636, long: -66.6431 },
    { name: "St.Johns, NL", lat: 47.5556, long: -52.7453 },
    { name: "Halifax, NS", lat: 44.6509, long: -63.5923 },
    { name: "Charlottetown, PE", lat: 46.2382, long: -63.1311 },
    { name: "Regina, SK", lat: 50.4452, long: -104.6189 },
    { name: "Winnipeg, MB", lat: 49.8954, long: -97.1385 },
    { name: "Iqaluit, NU", lat: 63.7467, long: -68.5170 },
    { name: "Yellowknife, NWT", lat: 62.4540, long: -114.3718 },
    { name: "Whitehorse , YT", lat: 60.7197, long: -135.0523 },
];

export const MockWeatherVariables = [BerlinWeather];

export const checkMockData = (location: { lat: number, long: number }) => {
    const locations = MockWeatherVariables.map((x, i) => { return { lat: x.latitude, long: x.longitude, index: i }});

    for (let i = 0; i < locations.length; i++) {
        const check = locations[i];
        console.log("Lat Check on Mock");
        const latCheck = checkBounds(location.lat, 2, check.lat);
        console.log("Long Check on Mock");
        const longCheck = checkBounds(location.long, 2, check.long);

        console.log(latCheck + " - " + longCheck);

        if (latCheck && longCheck) {
            console.log("Going with this mock data");
            return check.index;
        }
    }

    return -1;
}