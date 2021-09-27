import { all, call } from 'redux-saga/effects';
import userSagas from '../redux/User/user.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
  ])
}
