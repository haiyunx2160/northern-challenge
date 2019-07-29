import {put, takeLatest, delay} from 'redux-saga/effects';


function* emailSubmit(action) {
    yield delay(2000);
    yield put({type:'SUBMIT_SUCCESS', payload: action.payload})

}

export function* onEmailSubmit() {
    yield takeLatest('EMAIL_SUBMIT', emailSubmit)
}
