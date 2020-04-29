import {call, put, select} from 'redux-saga/effects';
import Axios from 'axios';

import {fetchProvincesSucceeded, submitProvinceSucceeded} from '../actions/provinces';

const apiCall = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/provinces');
    if (status !== 200){
      return[];
    }
    return data;
  }

  const apiSave = province => {
    
        if (province.id){
          return Axios.put(`http://localhost:3001/api/provinces/${province.id}`, province)
        }else{
          return Axios.post('http://localhost:3001/api/provinces', province)
        }
    
    
  }
  

export function* fetchProvinces({filter}){
    const provinces = yield call(apiCall, filter); 
    yield put(fetchProvincesSucceeded(provinces));
}

export function* submitProvince(){
  const {currentProvinces} = yield select (state => state.provinces);
  const {status, data} = yield call(apiSave, currentProvinces);
  yield put(submitProvinceSucceeded(status, data));

}