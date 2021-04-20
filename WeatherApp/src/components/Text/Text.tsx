import React from "react";
import {Text, View} from "react-native";
import styles from "./Text.style";


const Degree = (props: {
    temperature: number | string,
    styles: {
        fontSizeDegree: number,
        fontSizeSup: number,
        direction: 'row' | 'row-reverse',
        bold: boolean,
        color: string
    }

}) => {
    const fontFamily = props.styles.bold ? {fontFamily: 'WorkSans-SemiBold'} : {fontFamily: 'WorkSans-Regular'}

    return (
        <View style={[styles.temperature, {flexDirection: props.styles.direction}]}>
            <Text style={ [{fontSize: props.styles.fontSizeDegree, color: props.styles.color}, fontFamily] }>
                {props.temperature}
            </Text>
            <Text style={ [{fontSize: props.styles.fontSizeSup,  color: props.styles.color}, fontFamily]}>
                o
            </Text>
        </View>
    )
}


export default Degree