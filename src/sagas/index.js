// root sagas
import {all, takeEvery} from 'redux-saga/effects';

import {FETCH_COUNTRY_REQUESTED} from '../actions/country';

import {fetchCountry} from './country';

//function* es una funcion de escucha, y es global
// () => es una funcion statica y no puede hacer la escucha
//yiel es una funcion de llamada

export default function* root (){
    yield all ([
        takeEvery(FETCH_COUNTRY_REQUESTED, fetchCountry)
    ])
}

  