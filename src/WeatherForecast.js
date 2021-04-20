import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay"
import axios from "axios";

export default function WeatherForecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {       
    
  return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
              <WeatherForecastDay data={forecast[0]} />
            </div>
             <div className="col">
              <div className="WeatherForecast-day">Thu</div>
                <WeatherIcon code="01d" size={36}/>
               <div className="WeatherForecast-temperature"> 
                    <span className="WeatherForecast-temperature-max">19°C</span> 
                    <span className="WeatherForecast-temperature-min">10°C</span>
               </div> 
            </div>
             <div className="col">
              <div className="WeatherForecast-day">Thu</div>
                <WeatherIcon code="01d" size={36}/>
               <div className="WeatherForecast-temperature"> 
                    <span className="WeatherForecast-temperature-max">19°C</span> 
                    <span className="WeatherForecast-temperature-min">10°C</span>
               </div> 
            </div>
             <div className="col">
              <div className="WeatherForecast-day">Thu</div>
                <WeatherIcon code="01d" size={36}/>
               <div className="WeatherForecast-temperature"> 
                    <span className="WeatherForecast-temperature-max">19°C</span> 
                    <span className="WeatherForecast-temperature-min">10°C</span>
               </div>
             </div>
        </div>
    </div>
  );

    } else {
        

    let apiKey = "17a3051593bacf7917fd288879592ec0";
    let longtitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return null;

}
}