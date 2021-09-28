import { Universities } from '../../models';
import userTypes from './university.types';


export const getAllUniversity = () => ({
  type: userTypes.GET_ALL_UNIVERSITY
});

export const setAllUniversity = (data: Universities[]) => ({
  type: userTypes.SET_ALL_UNIVERSITY,
  payload: data
});
