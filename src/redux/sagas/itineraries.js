import {GET_LOCATION_START,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_ERROR} from '../../conts/actionTypes';
import {takeLatest} from 'redux-saga/effects';

export function* getLocations({payload}){
    try {
        
    } catch (error) {
        
    }
}

export default function* itineraries(){
    yield takeLatest(GET_LOCATION_START, getLocations);
}