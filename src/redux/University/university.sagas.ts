import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import universitiesApi from "../../api/universitiesApi";
import { CallBackAction, Universities } from '../../models';
import { setListUniversity } from './university.actions';
import universityTypes from './university.types';


export function* getAllUniversity(action: PayloadAction<CallBackAction<unknown>>) {
  const { onSuccess, onError } = action.payload;
  try {
    const data: Universities[] = yield universitiesApi.getAll();
    yield put(setListUniversity(data));
    onSuccess && onSuccess();
  } catch (err) {
    // TODO: add action fail
    onError && onError(err);
  }
}

export function* getUniversityByName(action: PayloadAction<CallBackAction<string>>) {
  const { data, onSuccess, onError } = action.payload;
  if (!data) {
    return;
  }
  try {
    const result: Universities[] = yield universitiesApi.getListByName(data);
    yield put(setListUniversity(result));
    onSuccess && onSuccess();
  } catch (err) {
    // TODO: add action fail
    onError && onError(err);
  }
}

export default function* universitySagas() {
  yield takeLatest(universityTypes.GET_ALL_UNIVERSITY, getAllUniversity);
  yield takeLatest(universityTypes.GET_UNIVERSITY_BY_NAME, getUniversityByName);
}
