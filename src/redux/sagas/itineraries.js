import {GET_LOCATION_START,
    GET_LOCATIONS_SUCCESS,
    GET_LOCATIONS_ERROR} from '../../conts/actionTypes';
import {takeLatest, call, put} from 'redux-saga/effects';
import apiCall from "../api";

const country = 'CL';
const currency = 'USD';
const locale = 'en-US'

export function* getLocations({payload}){
    try {
        const url = `autosuggest/v1.0/${country}/${currency}/${locale}/?query=${
            payload.query
        }`;
        const method = 'GET';
        const results = yield call(apiCall, url, method);
        yield put({ type: GET_LOCATIONS_SUCCESS, results: results.data.Places });
    } catch (error) {
        yield put({ type: GET_LOCATIONS_ERROR, error });
    }
}

export default function* itineraries(){
    yield takeLatest(GET_LOCATION_START, getLocations);
}