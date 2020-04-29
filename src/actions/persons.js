export const FETCH_PERSONS_REQUESTED = 'FETCH_PERSONS_REQUESTED'; //ACCION
export const FETCH_PERSONS_SUCCEEDED = 'FECTH_PERSONS_SUCCEEDED'; //REACCION DE LA ACCION

export const fetchPersonsRequested = () => ({type: FETCH_PERSONS_REQUESTED}); //Disparadores
export const fetchPersonsSucceeded = persons => ({type: FETCH_PERSONS_SUCCEEDED, persons});//disparadoress

export const UPDATE_PERSONS = 'UPDATE_PERSONS';
export const updatePersons = person =>({type: UPDATE_PERSONS, person });

export const SUBMIT_PERSON_REQUESTED = 'SUBMIT_PERSON_REQUESTED';
export const submitPersonRequested = () => ({type: SUBMIT_PERSON_REQUESTED});

export const SUBMIT_PERSON_SUCCEEDED = 'SUBMIT_PERSON_SUCCEEDED';
export const submitPersonSucceeded = (status, data) => ({type: SUBMIT_PERSON_SUCCEEDED, status, data});