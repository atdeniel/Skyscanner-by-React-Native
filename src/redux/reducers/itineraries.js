import {GET_LOCATION_START,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_ERROR} from '../../conts/actionTypes';

export default function (state, action){
    switch (action.type){
        case GET_LOCATION_START:
            return {};
            break;
        case GET_LOCATION_SUCCESS:
            return {}
            break;
        case GET_LOCATION_ERROR:
            return {}
            break;
        default:
            return {};
    }
}