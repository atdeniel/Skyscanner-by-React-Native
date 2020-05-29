import {all} from 'redux-saga/effects'
import itineraries from './itineraries'

export default function* rootSaga(){ //funcion generdora?
   yield all ([itineraries() ]); //escucho todo
}