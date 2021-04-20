import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
             <h1>{props.data.city}</h1>
            <ul>
                <li>
                <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.describtion}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                         <div className="float-left">
                             <WeatherIcon code={props.data.icon} size={52} />
                         </div>
                            <div className="float-left">
                            <WeatherTemperature celsius={props.data.temperature}/>
                        </div>
                     </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>  </li>
                        <li> Humidity: {props.data.humidity}% </li>
                        <li> Wind: {Math.round(props.data.wind)} km/h </li>
                    </ul>
                </div>
            </div>
          </div>
    
    );
}