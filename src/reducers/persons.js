import {
    FETCH_PERSONS_REQUESTED,
    FETCH_PERSONS_SUCCEEDED
}from '../actions/persons'

const initialState = {
    countries: [],
    headers:[
        {
         label: 'Nombre',
         key: 'name'
        },{
          label: 'Apellido',
          key: 'surname'
        },{
          label: 'E-mail',
          key: 'email'
        },{
            label:'Genero',
            key: 'gender'
        },{
            label: 'Avatar',
            key: 'avatar'
        }
      ]
}

export default (state = initialState, action) =>{
    switch(action.type){
        case FETCH_PERSONS_REQUESTED:
            return{...state, persons:[]};
        case FETCH_PERSONS_SUCCEEDED:
            return{...state, persons: action.persons};
        default:
            return {...state};
    }
}