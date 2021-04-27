import {StyleSheet} from "react-native";

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#050929',
        height: '100%',
        paddingTop: 10,
    },

    backArrow: {
        marginLeft: 15
    },

    input: {
        fontFamily: 'WorkSans-Regular',
        fontSize: 18,
        color: 'white',
        width: '100%',
        borderBottomWidth: 2,
        borderColor: '#FFFFFF',
        marginTop: 10
    },

    show: {
        paddingHorizontal: 25,
        borderBottomWidth: 2,
        borderColor: '#191C39',
    },

    logout: {
        fontFamily: 'WorkSans-SemiBold',
        color: 'white',
        fontSize: 28
    },

    logoutCont: {
        paddingHorizontal: 25,
        paddingVertical: 18
    },

    inputs:{
        paddingHorizontal: 25,
        borderBottomWidth: 2,
        borderColor: '#191C39',
        paddingBottom: 32
    },

    showHeadingCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 18,
    },

    heading: {
        color: 'white',
        fontSize: 23,
        fontFamily: 'WorkSans-SemiBold',
    },

    light: {
        fontFamily: 'WorkSans-Regular',
    },

    line: {
        fontFamily: 'WorkSans-SemiBold',
        marginHorizontal: 6,
        fontSize: 28,
        color: '#8B8EA5'
    }
})