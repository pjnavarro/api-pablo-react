export const FETCH_PERSONS_REQUESTED = 'FETCH_PERSONS_REQUESTED'; //ACCION
export const FETCH_PERSONS_SUCCEEDED = 'FECTH_PERSONS_SUCCEEDED'; //REACCION DE LA ACCION

export const fetchPersonsRequested = () => ({type: FETCH_PERSONS_REQUESTED}); //Disparadores
export const fetchPersonsSucceeded = persons => ({type: FETCH_PERSONS_SUCCEEDED, persons});//disparadoress