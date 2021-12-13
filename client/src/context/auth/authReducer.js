import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  RESET_PASSWORD_FAIL,
  LOADING,
  RESET_PASSWORD_SUCCESS
} from '../types';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        refresh: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        refresh: false,
        user: null,
        successMsg: action.payload
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case RESET_PASSWORD_FAIL:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        refresh: false,
        user: null,
        error: action.payload,
        successMsg: null
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        successMsg: null
      };
    default:
      throw new Error(`Unsupported type of: ${action.type}`);
  }
};

export default authReducer;
