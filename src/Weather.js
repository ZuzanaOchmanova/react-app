import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });
    
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready:true,
            temperature: response.data.main.temp,
            date: "Wednesday 8:00",
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            describtion: response.data.weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        });
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"/>
                 </div>
                 <div className="col-3">
                <input type="submit" 
                value="Search" 
                className="btn btn-primary w-100"></input>
                </div>
                 </div>   
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.describtion}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img
                    src={weatherData.iconUrl}
                    alt="{weatherData.description}"
                  className="float-left"
                    />
                <div className="float-left">
                   <span className="temperature">{Math.round(weatherData.temperature)}</span>
                   <span className="unit">°C</span>
                 </div>
                  </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>  </li>
                        <li> Humidity: {weatherData.humidity} </li>
                        <li> Wind: {Math.round(weatherData.wind)} km/h </li>
                    </ul>
                </div>
            </div>
            </div>
    );
    } else {
    const apiKey="17a3051593bacf7917fd288879592ec0";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ..."
    }
}