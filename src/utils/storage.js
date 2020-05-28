import { AsyncStorage } from 'react-native';

export const saveItem = async (keyName, keyValue) => {
    try {
        await AsyncStorage.setItem(keyName, keyValue); //es una promesa
        return true;
    } catch (e) {
        return false;
    }

};

export const getItem = async (keyName) => {
    try {
        return await AsyncStorage.getItem(keyName); //es una promesa
    } catch (e) {
        return false;
    }
};

export const clearAll = async () => {
    try{
        return await AsyncStorage.clear();
    }catch (e){
        return false;
    }
};