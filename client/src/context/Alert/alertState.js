import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT, REMOVE_ALL_ALERT } from '../types';

// Create a custom hook to use the auth context

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type, cb = null, timeout = 5000) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id });
      if (cb) {
        cb();
      }
    }, timeout);
  };
  const removeAlert = () => {
    dispatch({
      type: REMOVE_ALL_ALERT
    });
  };
  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
        removeAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
