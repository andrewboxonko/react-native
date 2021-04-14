import {StyleSheet} from "react-native";

export default StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 25,
        paddingRight: 25,
        borderBottomWidth: 2,
        borderColor: '#191C39'
    },

    weatherInfo: {
        height: 65,
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    cityDesc:{
        height: 65,
        width: '50%',
    },

    city: {
        fontFamily: 'WorkSans-SemiBold',
        fontSize: 25,
        color: 'white'
    },

    desc: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'WorkSans-Regular',
        fontSize: 13,
        color: '#8B8EA5',
        textTransform: 'uppercase'
    }

})