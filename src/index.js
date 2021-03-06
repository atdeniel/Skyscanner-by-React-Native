import React, 
{ useState, useEffect } //todo esto es un tema de hooks react
from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import Store from './redux/store'
import * as Font from 'expo-font'
import { Spinner } from 'native-base';
import {ROBOTO_FONT, ROBOTO_MEDIUM_FONT} from './conts';

const store = Store();

const ROBOTO = require('../node_modules/native-base/Fonts/Roboto.ttf');
const ROBOTO_MEDIUM = require('../node_modules/native-base/Fonts/Roboto_medium.ttf');


//route -> todas las rutas de nuestro componente
//provider -> contiene el store

export default () => { 

    //todo esto es un tema de hooks react 
    //cargar fuente
    const [fontsLoaded, setFontsLoaded] = useState(false);

    
    useEffect (() => {
        if (!fontsLoaded){
                loadFonts();
            }
    }, [fontsLoaded]); //todo esto es un tema de hooks react


    const loadFonts = async () => {
        await Font.loadAsync({
            [ROBOTO_FONT]: ROBOTO,
            [ROBOTO_MEDIUM_FONT]: ROBOTO_MEDIUM
        });
        setFontsLoaded(true);
    };

    if (!fontsLoaded){
        return <Spinner color="red"></Spinner>
    }


    return(
        <Provider store={store}> 
            <Routes/>
        </Provider>
    )
}