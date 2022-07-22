import React from "react";
import "../styleSheets/WeatherData.css"

function WeatherData({location,icon,text,temp,hum,wind,prec}){
    return(
        <div className="weatherContainer">
            <div className="weatherContainer__principalInfo">
                <div className="principalInfo__title">{location}</div>
                <div className="principalInfo__temp">{temp}°C</div>
            </div>
            <div className="weatherContainer__state">
                <img src={icon} className="weatherContainer__stateIcon" alt="icon" />
                <div className="weatherContainer__stateText">{text}</div>
            </div>
            <div className="weatherContainer__footer">
                <div className="weatherContainer__footerData">Humidity {hum}%</div>
                <div className="weatherContainer__footerData">Wind {wind} km/h</div>
                <div className="weatherContainer__footerData">Chance of Prec. {prec}%</div>
            </div>
        </div>
    )
}

export default WeatherData;