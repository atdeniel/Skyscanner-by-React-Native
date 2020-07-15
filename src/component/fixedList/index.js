import React from 'react'
import { Container, Spinner, ListItem } from 'native-base';
import { PRIMARY } from '../../conts';
import style from './style';

export default function FixedList({places, containerStyle, onItemPress}){
    
    if (!places || !places.length){
        return(<Spinner color={PRIMARY} size={30}></Spinner>);
    }

    return(
        <Container style={[style.container, containerStyle]}>
            <Content>
                <List>
                    {places && places.map((place, index) =>
                    <ListItem key={index} onPress={ () => onItemPress() }>
                        <Text>{place.PlaceName}</Text>
                    </ListItem>
                    )}
                </List>
            </Content>
        </Container>

    );
    
}