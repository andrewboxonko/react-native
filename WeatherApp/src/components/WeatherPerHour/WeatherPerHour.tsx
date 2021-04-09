import React from "react";
import {Text, View} from "react-native";
import styles from "./WeatherPerHour.style";
import { Degree } from '../Text/index';
import { forecastWeather } from "../../constants/constants.icons";

const WeatherPerHour = (props: {
    perHour: {
        temperature: number,
        time: string,
        weather: string
    }
}) => {

    const IconTag = forecastWeather[props.perHour.weather]
    return (
        <View style={styles.column}>
            <Text style={styles.time}>
                {props.perHour.time}
            </Text>
            <IconTag width={35} height={40} fill={"white"}/>
            <Degree temperature={props.perHour.temperature} fontSizeDegree={22} fontSizeSup={15}/>
        </View>
    )
}


export default WeatherPerHour