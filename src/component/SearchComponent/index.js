import React, { useState, useEffect } from 'react';
import { Form, Input, Item, Label, Icon, DatePicker, Picker, Button, Text} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import styles from "./style";
import { getLocations } from '../../redux/actions/itineraries';
import FixedList from "../fixedList";

export default function SearchComponent(props){

    const dispatch = useDispatch();
    const places = useSelector((state) => {
        state.itineraries.places
    });  

    console.log(places);

    const [originPlace, setOriginPlace] = useState({PlaceName:""});
    const [destinationPlace, setDestinationPlace] = useState({PlaceName:""});

    const [outboundDate, setOutboundDate] = useState();
    const [inboundDate, setInboundDate] = useState();

    const [adults, setAdults] = useState("0");
    const [children, setChildren] = useState("0");

    const [showOriginPlaceList, setShowOriginPlaceList] = useState(false);
    const [showDestinationPlaceList, setShowDestinationPlaceList] = useState(false);

    const handleOriginPlaceChange = text => setOriginPlace({PlaceName: text});
    const handleDestinationPlaceChange = text => setDestinationPlace({PlaceName: text});

    const handleOutboundDateChange = date => setOutboundDate(date);
    const handleInboundDateChange = date => setInboundDate(date);

    const handleAdultsChange = adults => setAdults(adults)
    const handleChildrenChange = children => setChildren(children)

    const searchButtonDisabled = () =>{
        if(!originPlace ||
            !destinationPlace ||
            !outboundDate || 
            !adults
        ){
            return true;
        }
        else{
            return false;
        }
    }

    const handleSearchButtonClick = () =>{
        dispatch(getLocations());
    };

    const handleOriginKeyPress = ({nativeEvent}) => {
        if (originPlace.PlaceName.length > 2){
            dispatch(getLocations({query:originPlace.PlaceName}))
            setShowOriginPlaceList(true);
        }

    };

    const handleDestinationKeyPress = ({nativeEvent}) => {
        if (destinationPlace.PlaceName.length > 2){
            dispatch(getLocations({query:destinationPlace.PlaceName}))
            setShowDestinationPlaceList(true);
        }
    };

    const handleOriginPlacePress = (placesSelected) =>{
        setOriginPlace(placeSelected);
        setShowOriginPlaceList(false);
    };

    const handleDestinationPlacePress = (placesSelected) =>{
        setDestinationPlace(placeSelected);
        setShowDestinationPlaceList(false);
    };

    return(
        <Form style={styles.form}>
            <Item>
                <Icon name="ios-home"></Icon>
                <Input  placeholder="Origen" value={originPlace.PlaceName} 
                style={styles.input}
                onChangeText={handleOriginPlaceChange}
                onKeyPress={handleOriginKeyPress}
                ></Input>
            </Item>
            {showOriginPlaceList && 
            <FixedList places={places} 
                containerStyle={{top:40}} 
                onItemPress={handleOriginPlacePress}>
            </FixedList>}
            <Item>
                <Icon name="ios-airplane"></Icon>
                <Input  placeholder="Destino" value={destinationPlace.PlaceName}
                style={styles.input}
                onChangeText={handleDestinationPlaceChange}
                onKeyPress={handleDestinationKeyPress}
                ></Input>
            </Item>
            {showDestinationPlaceList && 
            <FixedList places={places}
                containerStyle={{top:120}}
                onItemPress={handleDestinationPlacePress}>
            </FixedList>}
            <Item style={styles.dateContainer}>
                <Icon ios="ios-calendar" android="md-calendar"></Icon>
                <DatePicker placeHolderText="Ida" onDateChange={handleOutboundDateChange}></DatePicker>

                <Icon ios="ios-calendar" android="md-calendar"></Icon>
                <DatePicker placeHolderText="Regreso (opional)" onDateChange={handleInboundDateChange}></DatePicker>
            </Item>
            <Item style={styles.pickerContainer}>
                <Icon name="person"></Icon>
                <Picker
                    selectedValue={adults}
                    onValueChange={handleAdultsChange}
                    >
                    <Picker.Item label="Adultos" value="0"></Picker.Item>
                    <Picker.Item label="1" value="1"></Picker.Item>
                    <Picker.Item label="2" value="2"></Picker.Item>
                    <Picker.Item label="3" value="3"></Picker.Item>
                    <Picker.Item label="4" value="4"></Picker.Item>
                    <Picker.Item label="5" value="5"></Picker.Item>
                </Picker>
                
                <Icon name="person"></Icon>
                <Picker
                    selectedValue={children}
                    onValueChange={handleChildrenChange}
                    >
                    <Picker.Item label="Niños" value="0"></Picker.Item>
                    <Picker.Item label="1" value="1"></Picker.Item>
                    <Picker.Item label="2" value="2"></Picker.Item>
                    <Picker.Item label="3" value="3"></Picker.Item>
                    <Picker.Item label="4" value="4"></Picker.Item>
                    <Picker.Item label="5" value="5"></Picker.Item>
                </Picker>
                
            </Item>

            <Button style={styles.searchButton} disabled={searchButtonDisabled()} onPress={handleSearchButtonClick}>
                <Icon name="search" style={styles.searchIcon}></Icon>
                <Text style={styles.searchButtonText}>
                    Buscar
                </Text>
            </Button>

        </Form>
    );
}