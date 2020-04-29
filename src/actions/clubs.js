export const FETCH_CLUBS_REQUESTED = 'FETCH_CLUBS_REQUESTED'; //ACCION
export const FETCH_CLUBS_SUCCEEDED = 'FECTH_CLUBS_SUCCEEDED'; //REACCION DE LA ACCION

export const fetchClubsRequested = () => ({type: FETCH_CLUBS_REQUESTED}); //Disparadores
export const fetchClubsSucceeded = clubs => ({type: FETCH_CLUBS_SUCCEEDED, clubs});//disparadoress

export const UPDATE_CLUBS = 'UPDATE_CLUBS';
export const updateClubs = club =>({type: UPDATE_CLUBS, club });

export const SUBMIT_CLUB_REQUESTED = 'SUBMIT_CLUB_REQUESTED';
export const submitClubRequested = () => ({type: SUBMIT_CLUB_REQUESTED});

export const SUBMIT_CLUB_SUCCEEDED = 'SUBMIT_CLUB_SUCCEEDED';
export const submitClubSucceeded = (status, data) => ({type: SUBMIT_CLUB_SUCCEEDED, status, data});