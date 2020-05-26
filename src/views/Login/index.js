import React from 'react'
import {Image} from 'react-native';
import * as Google from 'expo-google-app-auth';
import {Container, Content, Text, Grid, Button} from 'native-base' //el text usa roboto_medium font

import styles from './style';

const GOOGLE_IMAGE = require('../../../assets/google-logo-icon.png');

//arrow function es anonima
export default function Login(){

    const handleLoginPress = async () => {
        const result = await Google.logInAsync({
            androidClientId: '633651205087-m5blhvajo3c097ho87chfcfigqs9668r.apps.googleusercontent.com',
            androidStandaloneAppClientId: '633651205087-m5blhvajo3c097ho87chfcfigqs9668r.apps.googleusercontent.com'
        }); 

        console.log("answer: ");
        console.log(result);
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