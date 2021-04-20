import React from "react";
import { View } from "react-native";
import { ForecastItem } from '../../components/ForecastItem/index'
import { Navigation } from '../../components/Navigation/index'
import styles from "./Forecast.style";


const Forecast = ({navigation}: {navigation: any}) => {
    return <View style={styles.wrapper}>
        <ForecastItem  forecastInfo={{
            day: 'Today',
            low: -2,
            high: 8,
            weather: 'nightCloudy'
        }}/>
        <ForecastItem  forecastInfo={{
            day: 'Tue',
            low: 2,
            high: 12,
            weather: 'daySunny'
        }}/>
        <ForecastItem  forecastInfo={{
            day: 'Wed',
            low: -3,
            high: 6,
            weather: 'daySunny'
        }}/>
        <ForecastItem  forecastInfo={{
            day: 'Thu',
            low: -2,
            high: 7,
            weather: 'cloudy'
        }}/>
        <ForecastItem  forecastInfo={{
            day: 'Fri',
            low: -4,
            high: 5,
            weather: 'nightCloudy'
        }}/>
        <ForecastItem  forecastInfo={{
            day: 'Sat',
            low: -2,
            high: 10,
            weather: 'nightCloudy'
        }}/>
        <ForecastItem  forecastInfo={{
            day: 'Sun',
            low: -3,
            high: 9,
            weather: 'rainy'
        }}/>
        <Navigation active={'forecast'} navigation={navigation}/>
    </View>
}

export default Forecast
