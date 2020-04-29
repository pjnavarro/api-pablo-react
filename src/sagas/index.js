// root sagas
import {all, takeEvery} from 'redux-saga/effects';

import {FETCH_COUNTRIES_REQUESTED, SUBMIT_COUNTRY_REQUESTED} from '../actions/countries';
import {FETCH_PERSONS_REQUESTED, SUBMIT_PERSON_REQUESTED} from '../actions/persons';
import {FETCH_CARS_REQUESTED, SUBMIT_CAR_REQUESTED} from '../actions/cars';
import {FETCH_PROVINCES_REQUESTED, SUBMIT_PROVINCE_REQUESTED} from '../actions/provinces';
import {FETCH_CLUBS_REQUESTED, SUBMIT_CLUB_REQUESTED} from '../actions/clubs';


import {fetchClubs, submitClub} from './clubs';
import {fetchCountries, submitCountry} from './countries';
import {fetchPersons, submitPerson} from './persons';
import {fetchProvinces, submitProvince} from './provinces';
import {fetchCars, submitCar} from './cars';



//function* es una funcion de escucha, y es global
// () => es una funcion statica y no puede hacer la escucha
//yiel es una funcion de llamada

export default function* root (){
    yield all ([
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(SUBMIT_COUNTRY_REQUESTED, submitCountry),

        
        takeEvery(FETCH_PROVINCES_REQUESTED, fetchProvinces),
        takeEvery(SUBMIT_PROVINCE_REQUESTED, submitProvince),


        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
        takeEvery(SUBMIT_CAR_REQUESTED, submitCar),



        takeEvery(FETCH_CLUBS_REQUESTED, fetchClubs),
        takeEvery(SUBMIT_CLUB_REQUESTED, submitClub),


        takeEvery(FETCH_PERSONS_REQUESTED, fetchPersons),
        takeEvery(SUBMIT_PERSON_REQUESTED, submitPerson),



    ])
}

  