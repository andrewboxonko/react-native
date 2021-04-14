import {StyleSheet} from "react-native";

export default StyleSheet.create({
    icon: {
        marginLeft: 5,
    },

    forecastItem: {
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

    scale: {
        width: 100,
        height: 12,
        backgroundColor: "#8B8EA5",
        marginLeft: 5,
        marginRight: 5,
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 12,
        borderTopStartRadius: 12,
        borderTopEndRadius: 12,
    },

    forecastDay: {
        width: 85,
        fontSize: 27,
        color: "white",
        fontFamily: 'WorkSans-SemiBold',
    },

    range: {
        marginLeft: 25,
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
    },

    degree: {
        fontSize: 26,
        fontFamily: 'WorkSans-Medium',
        color: 'white',
    },

    sup: {
        fontFamily: 'WorkSans-Medium',
        color: 'white',
        fontSize: 15,
        marginBottom: 12,
    },
});
