import React from "react";
import {View, Text, ImageBackground, BackHandler, Alert} from "react-native";
import styles from './Weather.style';
import Location from '../../assets/icons/location_city_black_24dp.svg';
import Settings from '../../assets/icons/settings_black_24dp.svg';
import { Degree }  from '../../components/Text/index';
import { WeatherPerHour } from  '../../components/WeatherPerHour/index';
import { WeatherDescription } from "../../components/WeatherDescription/index";
import { Navigation } from '../../components/Navigation/index'
import { DayCloudy } from '../../constants/constants.icons';
import {useRoute, useFocusEffect} from '@react-navigation/native';



const Weather = ({navigation}: {navigation: any}) => {

    const route = useRoute();

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                if (route.name === 'Weather') {
                    Alert.alert('Warning!', 'You can not return to login page', [
                        {text: 'Ok'}]);
                    return true;
                } else {
                    return false;
                }
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () => {
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
            }
        }, [route]),
    );


    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <ImageBackground style={styles.container} source={require('../../assets/images/background.png')} >
                    <View style={styles.navIcons}>
                        <Settings
                            width={35}
                            height={35}
                            fill={"#8B8EA5"}
                            onPress={() => navigation.navigate('Settings')}
                        />
                        <Location
                            width={35}
                            height={35}
                            fill={"#8B8EA5"}
                            onPress={() => navigation.navigate('CitySelection')}
                        />
                    </View>
                    <View style={styles.headingWrapper}>
                        <Text style={styles.headerText}>
                            Kharkiv
                        </Text>
                        <Text style={styles.headerSubText}>
                            Monday, November 3
                        </Text>
                        <View style={styles.weatherOverview}>

                            <Degree temperature={-2} styles={{
                                fontSizeDegree: 70,
                                fontSizeSup: 30,
                                direction: 'row',
                                bold: false,
                                color: 'white'
                            }}/>
                            <DayCloudy width={110} height={50} fill={"#8B8EA5"}/>
                            <View>
                                <Text style={styles.weatherInfo}>
                                    Mostly
                                </Text>
                                <Text style={styles.weatherInfo}>
                                    Cloudy
                                </Text>
                            </View>
                            <View style={styles.weatherRange}>
                                <Text style={styles.rowRange}>
                                    -2 /
                                </Text>
                                <View style={styles.row}>
                                    <Degree temperature={8} styles={{
                                        fontSizeDegree: 23,
                                        fontSizeSup: 15,
                                        direction: 'row',
                                        bold: false,
                                        color: 'white'
                                    }}/>
                                    <Text style={styles.celsius}>C</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.weatherPerHour}>
                <WeatherPerHour perHour={{
                    temperature: -2,
                    time: '6:00',
                    weather: 'nightCloudy'
                }}/>
                <WeatherPerHour perHour={{
                    temperature: -1,
                    time: '9:00',
                    weather: 'rainy'
                }}/>
                <WeatherPerHour perHour={{
                    temperature: 0,
                    time: '12:00',
                    weather: 'rainy'
                }}/>
                <WeatherPerHour perHour={{
                    temperature: 2,
                    time: '15:00',
                    weather: 'dayCloudy'
                }}/>
                <WeatherPerHour perHour={{
                    temperature: -4,
                    time: '18:00',
                    weather: 'daySunny'
                }}/>
            </View>
            <View style={styles.weatherDesc}>
                <WeatherDescription desc={{
                    data: '50%',
                    characteristic: 'water'
                }}/>
                <WeatherDescription desc={{
                    data: '5m/c',
                    characteristic: 'wind'
                }}/>
                <WeatherDescription desc={{
                    data: '6:20',
                    characteristic: 'sunrise'
                }}/>
                <WeatherDescription desc={{
                    data: '16:20',
                    characteristic: 'sunset'
                }}/>
            </View>
            <Navigation active={'weather'} navigation={navigation}/>
        </View>
    )
}

export default Weather

