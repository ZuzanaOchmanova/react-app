import React, { useState } from "react";


export default function WeatherTemperature(props) {
    
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
        <div className="">
            <span className="temperature"> {Math.round(props.celsius)}</span>
            <span className="unit"><strong>°C</strong> {""}|
            <a href="/" onClick={showFahrenheit} className="units">
                {""} °F
                </a>
            </span>
        </div>
    );
} else {
        let fahrenheit = (props.celsius * 9) /5 + 32;
        return (
        <div className="">
            <span className="temperature"> {Math.round(fahrenheit)}</span>
            <span className="unit">
            <a href="/" onClick={showCelsius} className="units">
              °C {""}
                 </a> | <strong>°F</strong>
            </span>
        </div>
    );
}
}
