import Cloudy from "../assets/icons/cloud.svg";
import DayCloudy from "../assets/icons/day-cloudy.svg";
import DaySunny from "../assets/icons/day-sunny.svg";
import NightCloudy from "../assets/icons/night-alt-cloudy.svg";
import Rain from "../assets/icons/rains.svg";
import Snow from "../assets/icons/snowflake.svg";
import Sunrise from '../assets/icons/noun_sunrise_3853300.svg';
import Sunset from '../assets/icons/noun_sunset_1352436.svg';
import Water from '../assets/icons/noun_Water_2399526.svg';
import Wind from '../assets/icons/wind.svg';
import React from "react";
import {SvgProps} from "react-native-svg";


const forecastWeather: {[index: string]: React.FC<SvgProps> } = {
    cloudy: Cloudy,
    dayCloudy: DayCloudy,
    daySunny: DaySunny,
    nightCloudy: NightCloudy,
    rainy: Rain,
    snowy: Snow,
}

const weatherDescription: {[index: string]: React.FC<SvgProps> } = {
    sunrise: Sunrise,
    sunset: Sunset,
    water: Water,
    wind: Wind,
}

export {
    forecastWeather,
    weatherDescription
}


export {
    Cloudy,
    DayCloudy,
    DaySunny,
    NightCloudy,
    Rain,
    Snow,
    Sunrise,
    Sunset,
    Water,
    Wind
}
