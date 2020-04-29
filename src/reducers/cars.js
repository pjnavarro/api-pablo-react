import {
    FETCH_CARS_REQUESTED,
    FETCH_CARS_SUCCEEDED,
    UPDATE_CARS
}from '../actions/cars'

const initialState = {
    cars: [],
    currentCars:{
        name: '',
        code: '',
        id: ''
    },
    headers:[
        {
         label: 'Marca',
         key: 'name'
        },{
          label: 'Modelo',
          key: 'code',
        },{
          label: 'Id',
          key: 'id'
        }
      ]
}

export default (state = initialState, action) =>{
    switch(action.type){
        case FETCH_CARS_REQUESTED:
            return{...state, cars:[]};
        case FETCH_CARS_SUCCEEDED:
            return{...state, cars: action.cars};
        case UPDATE_CARS:
            return{...state, currentCars: action.car};    
        default:
            return {...state};
    }
}