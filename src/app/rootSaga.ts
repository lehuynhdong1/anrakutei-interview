import { all, call } from 'redux-saga/effects';
import universitySagas from '../redux/University/university.sagas';
import userSagas from '../redux/User/user.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(universitySagas)
  ])
}
