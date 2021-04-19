import React from "react";
import Weather from "./Weather"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";


export default function App() {
  return (
  <div className="App"> 
    <div className="container">
     <Weather defaultCity="Aarhus"/>
<footer>
       This project was coded by {""}
       <a href="https://www.linkedin.com/in/zuzanaochmanova/" 
       target="_blank"
         rel="noopener noreferrer">
       Zuzana Ochmanova </a> 
        and is {""}
     <a href="https://github.com/ZuzanaOchmanova/react-app"
     target="_blank"
       rel="noopener noreferrer">
      Open-sourced on GitHub</a>
</footer>
    </div>
  </div>
  );
}


