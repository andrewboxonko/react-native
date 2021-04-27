import React, {useEffect, useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, Animated, Easing} from "react-native";
import LoginIcon from '../../assets/icons/login.svg';
import PasswordIcon from '../../assets/icons/lock.svg';
import styles from "./Login.style";
import {EMAIL_REGEX, PASSWORD_REGEX, Users} from "../../constants/namespaces";


const Login = ({navigation}: {navigation: any}) => {
    const [isLoading, setLoadingState] = useState(false)
    const [loadingSpin, setSpin] = useState(new Animated.Value(0))

    const [data, setData] = useState({
        login: '',
        password: '',
        isValidLogin: true,
        isValidPassword: true,
        enableLogin: false,
        enablePassword: false
    })

    const errorStyles = {
        borderWidth: 2,
        borderColor: '#e74c3c'
    }

    const validateLogin = (value: string) => {
        if (EMAIL_REGEX.test(value)){
            setData({
                ...data,
                login: value,
                isValidLogin: true,
                enableLogin: true
            })
        } else {
            setData({
                ...data,
                login: value,
                isValidLogin: false,
                enableLogin: false

            })
        }
    }

    const validatePassword = (value: string) => {
        if (PASSWORD_REGEX.test(value)){
            setData({
                ...data,
                password: value,
                isValidPassword: true,
                enablePassword: true
            })
        } else {
            setData({
                ...data,
                password: value,
                isValidPassword: false,
                enablePassword: false
            })
        }
    }

    const singIn = (login: string, password: string) => {
        setLoadingState(true)

        const user = Users.filter(us => us.login === login && us.password === password)

        if (user.length === 0){
            setLoadingState(false)
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            setData({
                ...data,
                isValidPassword: false,
                isValidLogin: false
            })
            return;
        } else {
            setTimeout(() => {
                setLoadingState(false)
                navigation.navigate('Weather')
            }, 2000)
        }
    }

    const spinAnimation = () => {
        Animated.loop(
            Animated.timing(
                loadingSpin,
                {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            )
        ).start(() => spinAnimation());
    }


    useEffect(() => spinAnimation(), [])

    const enable = !(data.enableLogin && data.enablePassword)

    const spin = loadingSpin.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={[styles.wrapper, isLoading ? {opacity: 0.7}: {opacity: 1}]}>
            <View style={[styles.inputCont, data.isValidLogin ? null : errorStyles]}>
                <LoginIcon width={35} height={35} style={styles.searchIcon}/>
                <TextInput
                    style={[styles.input, isLoading ? {opacity: 0.2}: {opacity: 1}]}
                    placeholder='Login'
                    placeholderTextColor={'white'}
                    onChangeText={text => validateLogin(text)}
                    value={data.login}
                    maxLength={30}
                />
            </View>
            <View style={[styles.inputCont, {marginTop: 35}, data.isValidPassword ? null : errorStyles]}>
                <PasswordIcon width={35} height={35} style={styles.searchIcon}/>
                <TextInput
                    style={[styles.input, isLoading ? {opacity: 0.2}: {opacity: 1}]}
                    placeholder='Password'
                    placeholderTextColor={'white'}
                    onChangeText={text => validatePassword(text)}
                    value={data.password}
                    maxLength={30}
                    secureTextEntry={true}
                />
            </View>
            <View style={{position: 'absolute', bottom: 180}}>
                { isLoading ? <Animated.Image source={require('../../assets/images/loader.png')}
                                 style={{transform: [{rotate: spin}]}}/> : null}
                {/*{isLoading ? <ActivityIndicator size={"large"} color={'white'}/> : null}*/}
            </View>
            <TouchableOpacity
                style={[styles.button, enable ? {opacity: 0.5} : {opacity: 1}]}
                disabled={enable}
                onPress={() => singIn(data.login, data.password)}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login
