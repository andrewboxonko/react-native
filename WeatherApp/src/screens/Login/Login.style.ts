import {StyleSheet} from "react-native";

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#050929',
        height: '100%',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32

    },

    inputCont: {
        height: 50,
        backgroundColor: '#8B8EA5',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#8B8EA5'
    },

    searchIcon: {
        marginHorizontal: 10,
    },

    input: {
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        flex: 1,
        height: 46,
        backgroundColor: '#8B8EA5',
        color: 'white',
        fontFamily: 'WorkSans-Regular',
        fontSize: 20,
    },

    button: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        height: 50,
        backgroundColor: '#7B61FF',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        textTransform: 'uppercase',
        color: 'white',
        fontFamily: 'WorkSans-SemiBold',
        fontSize: 22,
    }
})
