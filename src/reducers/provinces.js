import {
    FETCH_PROVINCES_REQUESTED,
    FETCH_PROVINCES_SUCCEEDED,
    UPDATE_PROVINCES
}from '../actions/provinces'

const initialState = {
    provinces: [],
    currentProvinces:{
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
        case FETCH_PROVINCES_REQUESTED:
            return{...state, provinces:[]};
        case FETCH_PROVINCES_SUCCEEDED:
            return{...state, provinces: action.provinces};
        case UPDATE_PROVINCES:
            return{...state, currentProvinces: action.province};    
        default:
            return {...state};
    }
}