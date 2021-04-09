import {StyleSheet} from "react-native";

export default StyleSheet.create({
    navigation: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '100%',
        backgroundColor: '#191C39',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    button:{
        width: '50%',
    },

    buttonText: {
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },

    active: {
        color: '#C5BBF6'
    },

    inactive: {
        color: 'white'
    }
})