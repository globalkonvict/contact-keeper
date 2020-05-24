import React, { useReducer } from 'react';
import { v4 as uid } from 'uuid';
import AlertContext from './AlertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = ({ children }) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //SetAlert
  const setAlert = (msg, type, timeout=5000) => {
    const id = uid();

    dispatch({ type: SET_ALERT, payload: { msg, type, id } });

    setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout)
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
