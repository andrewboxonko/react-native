import {Text, TouchableOpacity, View} from "react-native";
import styles from './Navigation.style';
import React from "react";

const Navigation = (props: {
    active: string
}) => {
    return (
        <View style={styles.navigation}>
            <TouchableOpacity style={styles.button}>
                <Text style={[styles.buttonText, props.active === 'weather' ? styles.active: styles.inactive]}>Weather</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={[styles.buttonText, props.active === 'forecast' ? styles.active: styles.inactive]}>Forecast</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Navigation