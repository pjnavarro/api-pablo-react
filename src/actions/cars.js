export const FETCH_CARS_REQUESTED = 'FETCH_CARS_REQUESTED'; //ACCION
export const FETCH_CARS_SUCCEEDED = 'FECTH_CARS_SUCCEEDED'; //REACCION DE LA ACCION

export const fetchCarsRequested = () => ({type: FETCH_CARS_REQUESTED}); //Disparadores
export const fetchCarsSucceeded = cars => ({type: FETCH_CARS_SUCCEEDED, cars});//disparadoress

export const UPDATE_CARS = 'UPDATE_CARS';
export const updateCars = car =>({type: UPDATE_CARS, car });

export const SUBMIT_CAR_REQUESTED = 'SUBMIT_CAR_REQUESTED';
export const submitCarRequested = () => ({type: SUBMIT_CAR_REQUESTED});

export const SUBMIT_CAR_SUCCEEDED = 'SUBMIT_CAR_SUCCEEDED';
export const submitCarSucceeded = (status, data) => ({type: SUBMIT_CAR_SUCCEEDED, status, data});