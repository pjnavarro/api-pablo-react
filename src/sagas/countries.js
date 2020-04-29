import {call, put, select} from 'redux-saga/effects';
import Axios from 'axios';

import {fetchCountriesSucceeded, submitContrySucceeded} from '../actions/countries';

const apiCall = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/country');
    if (status !== 200){
      return[];
    }
    return data;
  }

  const apiSave = country => {
    
        if (country.id){
          return Axios.put(`http://localhost:3001/api/country/${country.id}`, country)
        }else{
          return Axios.post('http://localhost:3001/api/country', country)
        }
    
    
  }
  

export function* fetchCountries({filter}){
    const countries = yield call(apiCall, filter); 
    yield put(fetchCountriesSucceeded(countries));
}

export function* submitCountry(){
  const {currentCountries} = yield select (state => state.countries);
  const {status, data} = yield call(apiSave, currentCountries);
  yield put(submitContrySucceeded(status, data));

}