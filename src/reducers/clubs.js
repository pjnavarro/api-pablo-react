import {
    FETCH_CLUBS_REQUESTED,
    FETCH_CLUBS_SUCCEEDED,
    UPDATE_CLUBS
}from '../actions/clubs'

const initialState = {
    clubs: [],
    currentClubs:{
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
        case FETCH_CLUBS_REQUESTED:
            return{...state, clubs:[]};
        case FETCH_CLUBS_SUCCEEDED:
            return{...state, clubs: action.clubs};
        case UPDATE_CLUBS:
            return{...state, currentClubs: action.club};    
        default:
            return {...state};
    }
}