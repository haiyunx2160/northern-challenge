import { all, fork } from 'redux-saga/effects';
import * as submitSagas from './submitSaga';


// import watchers from other files
export default function* rootSaga() {

    yield all([
        ...Object.values(submitSagas)
    ].map(fork));
}
