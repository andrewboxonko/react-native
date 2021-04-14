import {StyleSheet} from "react-native";

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#050929',
        height: '100%',
        paddingTop: 10,
    },

    weatherPerHour: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 40,
        paddingHorizontal: 30,
        borderBottomWidth: 2,
        borderColor: '#191C39',
    },

    weatherDesc: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 40,
        paddingHorizontal: 30,
    },

    header: {
        height: '44%',
        borderBottomWidth: 2,
        borderColor: '#191C39',
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    celsius: {
        fontFamily: 'WorkSans-Regular',
        fontSize: 23,
        letterSpacing: 1,
        color: 'white'
    },

    rowRange: {
        fontFamily: 'WorkSans-Regular',
        fontSize: 23,
        color: 'white',
    },

    headingWrapper: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
    },

    headerText: {
        fontFamily: 'WorkSans-SemiBold',
        fontSize: 50,
        letterSpacing: 1,
        color: 'white'
    },

    headerSubText: {
        fontFamily: 'WorkSans-Regular',
        fontSize: 21,
        textTransform: 'uppercase',
        color: '#8B8EA5'
    },

    weatherOverview: {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    weatherInfo: {
        fontFamily: 'WorkSans-Regular',
        fontSize: 13,
        textTransform: 'uppercase',
        color: '#8B8EA5',
    },

    weatherRange: {
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    navIcons: {
        paddingLeft: 12,
        paddingRight: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    container: {
        width: '100%',
        height: '90%',
        position: 'relative',
        resizeMode: "cover",
    }
})