import React, {useState} from "react";
import {Text, TextInput, View} from "react-native";
import Slider from '@react-native-community/slider';
import { Degree } from "../../components/Text/index";
import BackArrow from '../../assets/icons/arrow_back_ios_black_24dp.svg'
import styles from "./Settings.style";



const Settings = ({navigation}: {navigation: any}) => {
    const [textName, setTextName] = useState('');
    const [textAge, setTextAge] = useState('');


    return (
        <View style={styles.wrapper}>
            <BackArrow width={35}
                       height={35}
                       fill={"#8B8EA5"}
                       style={styles.backArrow}
                       onPress={() => navigation.navigate('Weather')}
            />
            <View>
                <View style={styles.inputs}>
                    <TextInput
                        style={styles.input}
                        placeholder='Name'
                        placeholderTextColor={'#8B8EA5'}
                        onChangeText={textName => setTextName(textName)}
                        value={textName}
                        maxLength={30}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Age'
                        placeholderTextColor={'#8B8EA5'}
                        onChangeText={textAge => setTextAge(textAge)}
                        value={textAge}
                        maxLength={3}
                        keyboardType={"numeric"}
                    />
                </View>
                <View style={styles.show}>
                    <View style={styles.showHeadingCont}>
                        <Text style={styles.heading}>
                            Show weather for
                        </Text>
                        <Text  style={[styles.heading, styles.light]}>
                            3 days
                        </Text>
                    </View>
                    <Slider
                        style={{width: '100%', height: 50}}
                        minimumValue={1}
                        maximumValue={7}
                        step={1}
                        value={3}
                        minimumTrackTintColor="#7B61FF"
                        maximumTrackTintColor="#8B8EA5"
                        thumbTintColor="white"

                    />
                </View>
                <View style={styles.show}>
                    <View style={styles.showHeadingCont}>
                        <Text style={styles.heading}>
                            Update weather every
                        </Text>
                        <Text  style={[styles.heading, styles.light]}>
                            15 min
                        </Text>
                    </View>
                    <Slider
                        style={{width: '100%', height: 50}}
                        minimumValue={1}
                        maximumValue={60}
                        step={15}
                        value={15}
                        minimumTrackTintColor="#7B61FF"
                        maximumTrackTintColor="#8B8EA5"
                        thumbTintColor="white"
                    />
                </View>
                <View style={[styles.show, {flexDirection: 'row', alignItems: 'center', paddingVertical: 18}]}>
                    <Degree temperature={'C'} styles={{
                        fontSizeDegree: 30,
                        fontSizeSup: 20,
                        direction: 'row-reverse',
                        color: 'white',
                        bold: true
                    }}/>
                    <Text style={styles.line}>
                        |
                    </Text>
                    <Degree temperature={'F'} styles={{
                        fontSizeDegree: 30,
                        fontSizeSup: 20,
                        direction: 'row-reverse',
                        color: '#8B8EA5',
                        bold: true
                    }}/>
                </View>
                <View style={styles.logoutCont}>
                    <Text style={styles.logout}>
                        Logout
                    </Text>

                </View>
            </View>
        </View>

    )
}


export default Settings
