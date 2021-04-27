import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from './Navigation.style';

const Navigation = (props: {
    active: string,
    navigation: any
}) => {
    return (
        <View style={styles.navigationC}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('Weather')}
            >
                <Text style={[styles.buttonText, props.active === 'weather' ? styles.active: styles.inactive]}>Weather</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('Forecast')}
            >
                <Text style={[styles.buttonText, props.active === 'forecast' ? styles.active: styles.inactive]}>Forecast</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Navigation
