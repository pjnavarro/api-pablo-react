// root sagas
import {all, takeEvery} from 'redux-saga/effects';

//function* es una funcion de escucha, y es global
// () => es una funcion statica y no puede hacer la escucha
//yiel es una funcion de llamada

export default function* root (){
    yield all ([])
}

  