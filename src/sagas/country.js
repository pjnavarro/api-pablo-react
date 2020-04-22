import {call, put} from 'redux-saga/effects';
import Axios from 'axios';

import {fetchCountrySucceeded} from '../actions/country';

const apiCall = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/country');
    if (status !== 200){
      return[];
    }
    return data;
  }

export function* fetchCountry({filter}){
    const countries = yield call(apiCall, filter); 
    yield put(fetchCountrySucceeded(countries));
}
