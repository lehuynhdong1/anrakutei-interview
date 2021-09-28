import userTypes from './university.types';

const INITIAL_STATE = {};

const universityReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case userTypes.SET_ALL_UNIVERSITY:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default universityReducer;
