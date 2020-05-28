import React, { useEffect } from 'react'
import {Spinner, Container, Content, Grid} from 'native-base'
import styles from './style';
import {LOGIN, ACCESS_TOKEN, HOME} from '../../conts'
import { getItem } from '../../utils/storage';
export default ({navigation}) => {
    
    useEffect(() => {
        redirect();
    });

    const redirect = async () =>{
        const token = await getItem(ACCESS_TOKEN);

        let route = LOGIN;
        if (token){
            navigation.navigate(HOME); 
        }

        navigation.navigate(route); 
    }

    return (
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Grid style={styles.grid}>
                    <Spinner color="red"/>
                </Grid>
            </Content>
        </Container>
        
    );
};