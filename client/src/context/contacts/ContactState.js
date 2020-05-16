import React, { useReducer } from 'react';
import ContactContext from './ContactContext';
import contactReducer from './contactReducer';

const ContactState = ({ children }) => {
  const initialState = {
    contact: [],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
