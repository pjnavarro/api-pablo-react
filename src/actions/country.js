export const FETCH_COUNTRY_REQUESTED = 'FETCH_COUNTRY_REQUESTED'; //ACCION
export const FETCH_COUNTRY_SUCCEEDED = 'FECTH_COUNTRY_SUCCEEDED'; //REACCION DE LA ACCION

export const fetchCountryRequested = () => ({type: FETCH_COUNTRY_REQUESTED}); //Disparadores
export const fetchCountrySucceeded = () => ({type: FETCH_COUNTRY_SUCCEEDED, countries});//disparadoress