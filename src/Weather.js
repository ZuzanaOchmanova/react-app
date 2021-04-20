import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";



export default function Weather(props) {
 
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready:true,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            describtion: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            coordinates: response.data.coord,
        });
    }

 
    function handleSubmit(event) {
        event.preventDefault();
        Search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

   function Search() {
    const apiKey="17a3051593bacf7917fd288879592ec0";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}/>
                 </div>
                 <div className="col-3">
                <input type="submit" 
                value="Search" 
                className="btn btn-primary w-100"></input>
                </div>
                 </div>   
            </form>    
            <WeatherInfo data={weatherData}/>
            
             <WeatherForecast coordinates={weatherData.coordinates}/>
          
            </div>
    );
    } else {
    Search();
    return "Loading ...";
    }
}