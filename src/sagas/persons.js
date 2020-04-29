import {call, put, select} from 'redux-saga/effects';
import Axios from 'axios';

import {fetchPersonsSucceeded, submitPersonSucceeded} from '../actions/persons';

const apiCall = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/persons');
    if (status !== 200){
      return[];
    }
    return data;
  }

  const apiSave = person => {
    
        if (person.id){
          return Axios.put(`http://localhost:3001/api/persons/${person.id}`, person)
        }else{
          return Axios.post('http://localhost:3001/api/persons', person)
        }
    
    
  }
  

export function* fetchPersons({filter}){
    const persons = yield call(apiCall, filter); 
    yield put(fetchPersonsSucceeded(persons));
}

export function* submitPerson(){
  const {currentPersons} = yield select (state => state.persons);
  const {status, data} = yield call(apiSave, currentPersons);
  yield put(submitPersonSucceeded(status, data));

}