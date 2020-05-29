import {StyleSheet} from 'react-native';
import { PRIMARY } from '../../conts';
import Constants from 'expo-constants'

export default StyleSheet.create({
    header:{
        backgroundColor: PRIMARY,
        marginTop: Constants.platform.android ? Constants.statusBarHeight : 0,
    }

});