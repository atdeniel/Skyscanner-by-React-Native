import {GET_LOCATION_START,
    GET_LOCATIONS_SUCCESS,
    GET_LOCATIONS_ERROR} from '../../conts/actionTypes';
import {takeLatest, call} from 'redux-saga/effects';
import apiCall from "../api";

const country = 'CL';
const currency = 'USD';
const locale = 'en-US'

export function* getLocations({payload}){
    try {
        const url = '/autosuggest/v1.0/${country}/${currency}/${locale}/?query=${payload.query}';
        const method = 'GET';
        yield call(apiCall, url, method)
    } catch (error) {
        console.log("error")
    }
}

export default function* itineraries(){
    yield takeLatest(GET_LOCATION_START, getLocations);
}