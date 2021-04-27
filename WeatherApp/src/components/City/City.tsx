import {View, Text} from "react-native";
import React from "react";
import styles from './City.style';
import { Degree } from '../Text/index'
import { forecastWeather } from '../../constants/constants.icons'

const City = (props: {
    cityInfo: {
        city: string,
        description: string,
        temperature: number,
        weather: string };
    }) => {

    const IconTag = forecastWeather[props.cityInfo.weather]

    return (
        <View style={styles.row}>
            <View style={styles.weatherInfo}>
                <Degree temperature={props.cityInfo.temperature} styles={{
                    fontSizeDegree: 37,
                    fontSizeSup: 21,
                    direction: 'row',
                    bold: false,
                    color: 'white'
                }}/>
                <IconTag width={120} height={45} fill={"#8B8EA5"}/>
            </View>
            <View style={styles.cityDesc}>
                <Text style={styles.city}>
                    {props.cityInfo.city}
                </Text>
                <Text style={styles.desc}>
                    {props.cityInfo.description}
                </Text>
            </View>
        </View>
    )
}

export default City