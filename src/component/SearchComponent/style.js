import {StyleSheet, Dimensions} from 'react-native'
import {SECONDARY} from '../../conts/index'

const {width} = Dimensions.get("window");

export default StyleSheet.create({
    form:{
        width,
        paddingLeft: width/14,
        paddingRight: width / 14
    },
    dateContainer: {
        marginTop: 12,
        justifyContent: "space-between",
    },
    input: {
        marginTop: 12,
        marginBottom: 4
    },
    pickerContainer: {
        marginTop: 14,
        marginBottom: 14
    },
    searchButton: {
        marginTop: 14,
        backgroundColor: SECONDARY,
        alignItems: "center",
        justifyContent: "center"
    },
    searchButtonText:{
        fontSize: 16,
        fontWeight: "bold",
    },
    searchIcon:{
        marginRight: -5
    }

})