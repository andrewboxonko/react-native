import React from 'react';
import {View} from "react-native";
import { City } from '../../components/City/index'
import { Search } from "../../components/Search/index";
import styles from './CitySelection.style'
import BackArrow from '../../assets/icons/arrow_back_ios_black_24dp.svg'


const CitySelection = ({navigation}: {navigation: any}) => {
    return (
        <View style={styles.wrapper}>
            <BackArrow width={35}
                       height={35}
                       fill={"#8B8EA5"}
                       style={styles.backArrow}
                       onPress={() => navigation.navigate('Weather')}
            />
            <Search/>
            <City cityInfo={{
                city: 'Dnipro',
                temperature: -2,
                weather: 'nightCloudy',
                description: 'mostly cloudy'
            }} />
            <City cityInfo={{
                city: 'Donetsk',
                temperature: -3,
                weather: 'daySunny',
                description: 'sunny'
            }} />
            <City cityInfo={{
                city: 'Donetsk',
                temperature: -3,
                weather: 'daySunny',
                description: 'sunny'
            }} />
            <City cityInfo={{
                city: 'Zaporizhzhia',
                temperature: -1,
                weather: 'nightCloudy',
                description: 'mostly cloudy'
            }} />
            <City cityInfo={{
                city: 'Kiev',
                temperature: 0,
                weather: 'cloudy',
                description: 'cloudy'
            }} />
            <City cityInfo={{
                city: 'Lviv',
                temperature: 2,
                weather: 'rainy',
                description: 'rainy'
            }} />

        </View>
    )
}

export default CitySelection
