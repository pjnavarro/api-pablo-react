export const FETCH_COUNTRIES_REQUESTED = 'FETCH_COUNTRIES_REQUESTED'; //ACCION
export const FETCH_COUNTRIES_SUCCEEDED = 'FECTH_COUNTRIES_SUCCEEDED'; //REACCION DE LA ACCION

export const fetchCountriesRequested = () => ({type: FETCH_COUNTRIES_REQUESTED}); //Disparadores
export const fetchCountriesSucceeded = countries => ({type: FETCH_COUNTRIES_SUCCEEDED, countries});//disparadoress

export const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';
export const updateCountries = country =>({type: UPDATE_COUNTRIES, country });

export const SUBMIT_COUNTRY_REQUESTED = 'SUBMIT_COUNTRY_REQUESTED';
export const submitCountryRequested = () => ({type: SUBMIT_COUNTRY_REQUESTED});

export const SUBMIT_COUNTRY_SUCCEEDED = 'SUBMIT_COUNTRY_SUCCEEDED';
export const submitContrySucceeded = (status, data) => ({type: SUBMIT_COUNTRY_SUCCEEDED, status, data});