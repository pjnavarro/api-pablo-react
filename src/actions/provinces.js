export const FETCH_PROVINCES_REQUESTED = 'FETCH_PROVINCES_REQUESTED'; //ACCION
export const FETCH_PROVINCES_SUCCEEDED = 'FECTH_PROVINCES_SUCCEEDED'; //REACCION DE LA ACCION

export const fetchProvincesRequested = () => ({type: FETCH_PROVINCES_REQUESTED}); //Disparadores
export const fetchProvincesSucceeded = provinces => ({type: FETCH_PROVINCES_SUCCEEDED, provinces});//disparadoress

export const UPDATE_PROVINCES = 'UPDATE_PROVINCES';
export const updateProvinces = province =>({type: UPDATE_PROVINCES, province });

export const SUBMIT_PROVINCE_REQUESTED = 'SUBMIT_PROVINCE_REQUESTED';
export const submitProvinceRequested = () => ({type: SUBMIT_PROVINCE_REQUESTED});

export const SUBMIT_PROVINCE_SUCCEEDED = 'SUBMIT_PROVINCE_SUCCEEDED';
export const submitProvinceSucceeded = (status, data) => ({type: SUBMIT_PROVINCE_SUCCEEDED, status, data});