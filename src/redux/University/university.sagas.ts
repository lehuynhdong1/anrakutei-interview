import { put, takeLatest } from 'redux-saga/effects';
import universitiesApi from "../../api/universitiesApi";
import { Universities } from '../../models';
import { setAllUniversity } from './university.actions';
import universityTypes from './university.types';


export function* getAllUniversity() {
  try {
    const data: Universities[] = yield universitiesApi.getAll();
    yield put(setAllUniversity(data));
  } catch (err) {
    console.log(err);
  }
}

export default function* universitySagas() {
  yield takeLatest(universityTypes.GET_ALL_UNIVERSITY, getAllUniversity);
}
