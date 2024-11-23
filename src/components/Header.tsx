import React from "react";

import { WeatherVariables } from "../data/MockData";

import '../css/header.css';

const Header = (props: { location: { lat: number, long: number }, setLocation: React.Dispatch<React.SetStateAction<{ lat: number, long: number }>>, getWeatherInformation: () => void, addPreviousLocation: (location: { lat: number, long: number }) => void}) => {

    const { location, setLocation, getWeatherInformation, addPreviousLocation } = props;

    return (
        <div id="header" data-testid="header-component">
            <div id="WeatherLogo">LOGO</div>
            <div id="location-inputs">
                <label htmlFor="Location-chooser">Choose Location:</label>
                <select name="Location-chooser" id="Location-chooser" onChange={(e) => {
                    const split = e.target.value.split(",").map(x => parseFloat(x));
                    setLocation({lat: split[0], long: split[1]});
                }} defaultValue={"_"}>
                    <option value="_" disabled>Choose destination</option>
                    {WeatherVariables.map((x, i) => {
                        return (
                            <option key={i} value={`${x.latitude},${x.longitude}`}>{x.latitude}, {x.longitude}</option>
                        );
                    })}
                </select>
                <p>OR</p>
                <label htmlFor="Latitude" aria-label="Latitude" className="location-label">Latitude</label>
                <input name="Latitude" className="location-input" id="Latitude"  value={location.lat} onChange={({target}) => setLocation({...location, lat: parseFloat(target.value ? target.value : "0")})}></input>
                <label htmlFor="Longitude" aria-label="Longitude" className="location-label">Longitude</label>
                <input name="Longitude" className="location-input" id="Longitude"  value={location.long} onChange={({target}) => setLocation({...location, long: parseFloat(target.value ? target.value : "0")})}></input>
                <button name="Search" id="get-weather" data-testid="submit-weather" onClick={() => { addPreviousLocation({lat: location.lat, long: location.long}); getWeatherInformation(); }}>Get My Weather</button>
            </div>
        </div>
    );
}

export default Header;