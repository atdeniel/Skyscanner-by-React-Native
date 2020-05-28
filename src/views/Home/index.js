import React, {useEffect, useState} from 'react'
import {View, Text, Container, Content, Grid} from 'native-base'
import MyHeader from '../../component/header'
import {USER_INFO} from "../../conts"
import {getItem} from '../../utils/storage'
import SearchComponent from '../../component/SearchComponent'
import genericStyles from '../../styles';

export default function Home() {
    const [userInfo,setUserInfo] = useState(null);

    useEffect(() => {
        if (!userInfo){
            loadUserInfo();
        }
    },
        [userInfo]
    ); //Leer la informacion del dipositivo en el storage
    
    const loadUserInfo = async () => {
        let userInfo = await getItem(USER_INFO);
        userInfo = JSON.parse(userInfo);
        setUserInfo(userInfo);
    };
    

    return (
        <Container>
            <MyHeader imageUri={userInfo && userInfo.photoUrl}></MyHeader>
                <Content contentContainerStyle={genericStyles.centeredContent}>
                    <Grid style={genericStyles.centeredGrid}>
                        <SearchComponent></SearchComponent>
                    </Grid>
                </Content>
        </Container>
    );
}