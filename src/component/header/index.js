import React from 'react';
import {Header, Left, Body, Right, Content, Thumbnail} from 'native-base'
import { PRIMARY_DARK } from '../../conts';
import {StyleSheet} from 'react-native';

export default function MyHeader(imageUri){

    imageUri = imageUri == null ? "" : imageUri.imageUri;

    return (
        <Header androidStatusBarColor={PRIMARY_DARK} style={StyleSheet.header}>
            <Left></Left>
            <Body></Body>
            <Right>
                <Thumbnail source={{uri: imageUri}} small></Thumbnail>
            </Right>
        </Header>
    );
}