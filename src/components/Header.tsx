import React, { useState } from "react";

import { WeatherVariables } from "../data/MockData";

import '../css/header.css';

const Header = (props: { location: { lat: number, long: number }, setLocation: React.Dispatch<React.SetStateAction<{ lat: number, long: number }>>, getWeatherInformation: () => void, addPreviousLocation: (location: { lat: number, long: number }) => void}) => {

    const { location, setLocation, getWeatherInformation, addPreviousLocation } = props;

    const [input, setInput] = useState({ lat: "", long: "" });

    // eslint-disable-next-line
    const coordsPattern = new RegExp("^-?[0-9]*\.?[0-9]*$|^[0-9]+\.?[0-9]*$");

    const changeLocation = (value: { lat: string, long: string }) => {
        setInput(value);
        if (coordsPattern.test(input.lat) && coordsPattern.test(input.long)) {
            setLocation(() => { return { lat: parseFloat(value.lat), long: parseFloat(value.long) } });
        }
    }

    const submitLocation = () => {
        addPreviousLocation({lat: location.lat, long: location.long}); 
        getWeatherInformation();
    }

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
                <input name="Latitude" className="location-input" id="Latitude" type="text" value={input.lat} onChange={({target}) => { changeLocation({ lat: target.value, long: input.long }); }}></input>
                <label htmlFor="Longitude" aria-label="Longitude" className="location-label">Longitude</label>
                <input name="Longitude" className="location-input" id="Longitude" type="text" value={input.long} onChange={({target}) => { changeLocation({ lat: input.lat, long: target.value}); }}></input>
                <button name="Search" id="get-weather" onClick={() => { submitLocation(); }}>Get My Weather</button>
                <button name="Geoloc" id="get-geoloc" onClick={() => { 
                    navigator.geolocation.getCurrentPosition((pos) => {
                        const { latitude, longitude } = pos.coords;
                        setLocation({ lat: latitude, long: longitude });
                    }, () => { alert("Cannot get location."); return;});
                 }}>Curr. Loc.</button>
            </div>
        </div>
    );
}

export default Header;