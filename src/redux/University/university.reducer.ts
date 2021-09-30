import userTypes from './university.types';

const INITIAL_STATE = {
  list: [],
};

const universityReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case userTypes.SET_LIST_UNIVERSITY:
      return {
        ...state,
        list: action.payload,
      };
    case userTypes.GET_UNIVERSITY_BY_NAME:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default universityReducer;
