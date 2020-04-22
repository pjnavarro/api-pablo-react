// root sagas
import {all, takeEvery} from 'redux-saga/effects';

import {FETCH_COUNTRY_REQUESTED} from '../actions/country';
import {FETCH_PERSONS_REQUESTED} from '../actions/persons';

import {fetchCountry} from './country';
import {fetchPersons} from './persons';

//function* es una funcion de escucha, y es global
// () => es una funcion statica y no puede hacer la escucha
//yiel es una funcion de llamada

export default function* root (){
    yield all ([
        takeEvery(FETCH_COUNTRY_REQUESTED, fetchCountry),
        takeEvery(FETCH_PERSONS_REQUESTED, fetchPersons)
    ])
}

  