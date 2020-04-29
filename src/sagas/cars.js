import {call, put, select} from 'redux-saga/effects';
import Axios from 'axios';

import {fetchCarsSucceeded, submitCarSucceeded} from '../actions/cars';

const apiCall = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/cars');
    if (status !== 200){
      return[];
    }
    return data;
  }

  const apiSave = car => {
    
        if (car.id){
          return Axios.put(`http://localhost:3001/api/cars/${car.id}`, car)
        }else{
          return Axios.post('http://localhost:3001/api/cars', car)
        }
    
    
  }
  

export function* fetchCars({filter}){
    const cars = yield call(apiCall, filter); 
    yield put(fetchCarsSucceeded(cars));
}

export function* submitCar(){
  const {currentCars} = yield select (state => state.cars);
  const {status, data} = yield call(apiSave, currentCars);
  yield put(submitCarSucceeded(status, data));

}