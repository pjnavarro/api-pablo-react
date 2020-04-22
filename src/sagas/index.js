// root sagas
import {all, takeEvery} from 'redux-sa/effects';

//function* es una funcion de escucha, y es global
// () => es una funcion statica y no puede hacer la escucha
//yiel es una funcion de llamada

export function* root (){
    yield([])
}