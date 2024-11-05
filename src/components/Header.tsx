import React from "react";

import '../css/header.css';

const Header = (props: { location: { lat: number, long: number }, setLocation: React.Dispatch<React.SetStateAction<{ lat: number, long: number }>>, getWeatherInformation: () => void}) => {

    const { location, setLocation, getWeatherInformation } = props;

    return (
        <div id="header" data-testid="header-component">
            <div id="WeatherLogo">LOGO</div>
            <div id="location-inputs">
                <label htmlFor="Latitude" aria-label="Latitude" className="location-label">Latitude</label>
                <input name="Latitude" className="location-input" id="Latitude"  value={location.lat} onChange={({target}) => setLocation({...location, lat: Number(target.value)})}></input>
                <label htmlFor="Longitude" aria-label="Longitude" className="location-label">Longitude</label>
                <input name="Longitude" className="location-input" id="Longitude"  value={location.long} onChange={({target}) => setLocation({...location, long: Number(target.value)})}></input>
                <button name="Search" id="get-weather" data-testid="submit-weather" onClick={() => { getWeatherInformation(); }}>Get My Weather</button>
            </div>
        </div>
    );
}

export default Header;