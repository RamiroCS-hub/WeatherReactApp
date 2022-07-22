import React,{useState,useEffect} from "react";
import Input from "./Input";
import WeatherData from "./WeatherData";
import styles from "../styleSheets/Weather.module.css";

function Weather ({location,icon,state,temperature}){

    const apiKey="38d0e33a03534801bfc133827222207";
    const [weather,setWeather] = useState(null);

    async function requestManager(country = null) {
        const url=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=no`
    
        try {
            const response = await fetch(url);
            const json = await response.json();

            console.log("el responseJSON es: ",json);

            setWeather(json);
            
        }catch (e){
            console.log("el error es:", e);
        }
    };
    
    const onSubmit = (input) =>{
        console.log("entre");
        console.log("el input es:",input);
        requestManager(input);
        setWeather(null);
    };

    useEffect(() => {
        requestManager();
    },[]);

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""}`;
    },[weather]);
    return(
        <div className={styles.App__principalContainer}>
            <Input 
                submitChange={onSubmit} 
            />
            <WeatherData 
                location={weather?.location.name}
                icon={weather?.current.condition.icon}
                text={weather?.current.condition.text}
                temp={weather?.current.temp_c}
                wind={weather?.current.gust_kph}
                prec={weather?.current.precip_in}
                hum={weather?.current.humidity}
            />
        </div>
    )
}

export default Weather;