import {
    FETCH_COUNTRIES_REQUESTED,
    FETCH_COUNTRIES_SUCCEEDED,
    UPDATE_COUNTRIES
}from '../actions/countries'

const initialState = {
    countries: [],
    currentCountries:{
        name: '',
        code: '',
        id: ''
    },
    headers:[
        {
         label: 'Nombre',
         key: 'name'
        },{
          label: 'Codigo',
          key: 'code'
        },{
          label: 'Id',
          key: 'id'
        }
      ]
}

export default (state = initialState, action) =>{
    switch(action.type){
        case FETCH_COUNTRIES_REQUESTED:
            return{...state, countries:[]};
        case FETCH_COUNTRIES_SUCCEEDED:
            return{...state, countries: action.countries};
        case UPDATE_COUNTRIES:
            return{...state, currentCountries: action.country};    
        default:
            return {...state};
    }
}