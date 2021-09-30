import { CallBackAction, Universities } from '../../models';
import userTypes from './university.types';


export const getAllUniversity = (value: CallBackAction<string>) => ({
  type: userTypes.GET_ALL_UNIVERSITY,
  payload: value
});

export const setListUniversity = (data: Universities[]) => ({
  type: userTypes.SET_LIST_UNIVERSITY,
  payload: data
});

export const getUniversityByName = (value: CallBackAction<string>) => ({
  type: userTypes.GET_UNIVERSITY_BY_NAME,
  payload: value
});
