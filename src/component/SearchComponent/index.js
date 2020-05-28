import React, { useState, useEffect } from 'react';
import { Form, Input, Item, Label, Icon, DatePicker, Picker} from 'native-base';

export default function SearchComponent(props){
    const [originPlace, setOriginPlace] = useState('');
    const [destinationPlace, setDestinationPlace] = useState('');

    const [outboundDate, setOutboundDate] = useState();
    const [inboundDate, setInboundDate] = useState();

    const [adults, setAdults] = useState("0");
    const [children, setChildren] = useState("0");

    const handleOriginPlaceChange = text => setOriginPlace(text);
    const handleDestinationPlaceChange = text => setDestinationPlace(text);

    const handleOutboundDateChange = date => setOutboundDate(date);
    const handleInboundDateChange = date => setInboundDate(date);

    const handleAdultsChange = adults => setAdults(adults)
    const handleChildrenChange = children => setChildren(children)

    return(
        <Form>
            <Item>
                <Icon name="ios-home"></Icon>
                <Input  placeholder="Origen" value={originPlace} 
                onChangeText={handleOriginPlaceChange}></Input>
            </Item>
            <Item>
                <Icon name="ios-airplane"></Icon>
                <Input  placeholder="Destino" value={destinationPlace}
                onChangeText={handleDestinationPlaceChange}
                ></Input>
            </Item>
            <Item>
                <Icon ios="ios-calendar" android="md-calendar"></Icon>
                <DatePicker placeHolderText="Ida" onDateChange={handleOutboundDateChange}></DatePicker>
            </Item>
            <Item>
                <Icon ios="ios-calendar" android="md-calendar"></Icon>
                <DatePicker placeHolderText="Regreso (opional)" onDateChange={handleInboundDateChange}></DatePicker>
            </Item>
            <Item>
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
            </Item>
            <Item>
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
                <Icon name="person"></Icon>
            </Item>
        </Form>
    );
}