import React from 'react'
import {Image} from 'react-native';
import * as Google from 'expo-google-app-auth';
import {Container, Content, Text, Grid, Button} from 'native-base' //el text usa roboto_medium font

import styles from './style';
import { saveItem } from '../../utils/storage'
import {ACCESS_TOKEN,USER_INFO,GOOGLE_SUCCESS_MESSAGE} from '../../conts/index'
import enviroment from '../../../env'

const GOOGLE_IMAGE = require('../../../assets/google-logo-icon.png');
const {
    androidClientId,
    androidStandaloneAppClientId
} = enviroment();

//arrow function es anonima
export default function Login(){

    const handleLoginPress = async () => {
       
        try{

            const {user,accessToken,type} = await Google.logInAsync({
                androidClientId,
                androidStandaloneAppClientId
            }); 
    
            if (type === GOOGLE_SUCCESS_MESSAGE){
                const userResult = await saveItem(USER_INFO, JSON.stringify(user) );
                const tokenResult = await saveItem(ACCESS_TOKEN, accessToken);
                //el await es para que espere el resultado de save item :)
                console.log("funciono el login: "+userResult);
            }

        }catch (e) {
            alert('Error: '+e);
        }


    };

    return( // es como una vista view
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Grid style={styles.grid}>
                    <Text style={styles.title}>Bienvenido!</Text>
                    <Text style={styles.subtitle}>Inicia sesion para continuar</Text>
                    <Button info style={styles.googleBtn} onPress={handleLoginPress}>
                        <Image source = {GOOGLE_IMAGE} style={styles.googleIcon}>
                        </Image>
                        <Text>Google</Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    );
};
