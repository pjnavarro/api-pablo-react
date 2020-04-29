import {combineReducers} from 'redux';


import countries from './countries';
import persons from './persons';
import cars from './cars';
import provinces from './provinces';
import clubs from './clubs';


export default combineReducers ({
    countries,
    persons,
    clubs,
    provinces,
    cars
});
