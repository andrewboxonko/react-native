import {Text, View} from "react-native";
import React from "react";
import styles from "./Text.style";

const Degree = (props: {
    temperature: number,
    fontSizeDegree: number,
    fontSizeSup: number,
}) => {
    return (
        <View style={styles.temperature}>
            <Text style={ [styles.degree, {fontSize: props.fontSizeDegree}] }>
                {props.temperature}
            </Text>
            <Text style={ [styles.sup, {fontSize: props.fontSizeSup}]}>
                o
            </Text>
        </View>
    )
}


export default Degree