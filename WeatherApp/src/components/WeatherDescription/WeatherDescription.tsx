import React from 'react';
import {View, Text} from "react-native";
import styles from './WeatherDescription.style'
import { weatherDescription } from "../../constants/constants.icons";

const WeatherDescription = (props: {
    desc: {
        characteristic: string,
        data: string,
    }
}) => {

    const IconTag = weatherDescription[props.desc.characteristic]

    return (
        <View style={styles.descItem}>
            <IconTag width={35} height={40} fill={"white"}/>
            <Text style={styles.data}>
                {props.desc.data}
            </Text>
        </View>
    )
}

export default WeatherDescription