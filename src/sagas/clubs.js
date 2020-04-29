import {call, put, select} from 'redux-saga/effects';
import Axios from 'axios';

import {fetchClubsSucceeded, submitClubSucceeded} from '../actions/clubs';

const apiCall = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/clubes');
    if (status !== 200){
      return[];
    }
    return data;
  }

  const apiSave = club => {
    
        if (club.id){
          return Axios.put(`http://localhost:3001/api/clubes/${club.id}`, club)
        }else{
          return Axios.post('http://localhost:3001/api/clubes', club)
        }
    
    
  }
  

export function* fetchClubs({filter}){
    const clubs = yield call(apiCall, filter); 
    yield put(fetchClubsSucceeded(clubs));
}

export function* submitClub(){
  const {currentClubs} = yield select (state => state.clubs);
  const {status, data} = yield call(apiSave, currentClubs);
  yield put(submitClubSucceeded(status, data));

}