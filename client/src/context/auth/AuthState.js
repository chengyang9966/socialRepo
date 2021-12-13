import React, { useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_ERRORS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  LOADING
} from '../types';

// Create a custom hook to use the auth context

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  return [state, dispatch];
};

// Action creators
// NOTE: These could be moved to a separate file like in redux
// but they remain here for ease of students transitioning

// Load User
export const loadUser = async (dispatch) => {
  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Reset User password
export const resetPassword = async (dispatch, formData) => {
  try {
    dispatch({ type: LOADING });
    const res = await axios.put('/api/users/resetpassword', formData);

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: res.data.msg
    });

    // loadUser(dispatch);
  } catch (err) {
    let errArr = err.response.data.errors;
    if (Array.isArray(errArr) && errArr.length > 0) {
      errArr.forEach((w) =>
        dispatch({
          type: RESET_PASSWORD_FAIL,
          payload: w.msg
        })
      );
    } else {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: err.response.data.msg
      });
    }
  }
};

// Logout
export const logout = (dispatch) => {
  dispatch({ type: LOGOUT });
};

// Clear Errors
export const clearErrors = (dispatch) => dispatch({ type: CLEAR_ERRORS });

// AuthState Provider Component

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    refresh: true,
    user: null,
    error: null,
    successMsg: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // set token on initial app loading
  setAuthToken(state.token);

  // load user on first run or refresh
  if (state.refresh) {
    loadUser(dispatch);
  }

  // 'watch' state.token and set headers and local storage on any change
  useEffect(() => {
    setAuthToken(state.token);
  }, [state.token]);

  return (
    <AuthContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
