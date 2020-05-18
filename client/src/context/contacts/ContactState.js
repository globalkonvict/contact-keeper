import React, { useReducer } from 'react';
import { v4 as uid } from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Joe James',
        email: 'joejames@gmail.com',
        phone: '123-123-1234',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Gill James',
        email: 'Gilljames@gmail.com',
        phone: '333-123-1234',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Marse James',
        email: 'marsejames@gmail.com',
        phone: '777-123-1234',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contacts

  const addContact = contact => {
    contact.id = uid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Update Contacts

  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //Delete Contacts

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Filter Contacts
  const filterContacts = value => {
    dispatch({ type: FILTER_CONTACTS, payload: value });
  };

  //Clear Filter

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        ...state,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
