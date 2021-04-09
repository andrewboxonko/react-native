import {Text, View} from "react-native";
import React from "react";
import { forecastWeather } from '../../constants/constants.icons'
import { Degree } from '../Text/index'
import styles from './ForecastItem.style';


const ForecastItem = (props: {
    forecastInfo: {
        day: string,
        low: number,
        high: number,
        weather: string };
    }) => {

    const IconTag = forecastWeather[props.forecastInfo.weather]

    return (
        <View style={styles.forecastItem}>
            <Text style={styles.forecastDay}>
                {props.forecastInfo.day}
            </Text>
           <IconTag width={60} height={50} fill={"#8B8EA5"} />
            <View style={styles.range}>
                <Degree temperature={props.forecastInfo.low} fontSizeDegree={26} fontSizeSup={18} />
                <View style={styles.scale} />
                <Degree temperature={props.forecastInfo.high} fontSizeDegree={26} fontSizeSup={18} />
            </View>
        </View>
    )
}

export default ForecastItem;


{/*<StatusBar*/}
{/*    barStyle={isDarkMode ? 'light-content' : 'dark-content'}*/}
{/*/>*/}