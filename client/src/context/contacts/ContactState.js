import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './ContactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  GET_CONTACT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CLEAR_CONTACTS,
  CONTACT_ERROR,
} from '../types';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: [],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');
      dispatch({ type: GET_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR });
    }
  };

  //Add Contacts
  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);

      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.data.msg });
    }
  };

  //Update Contacts
  const updateContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.put(`/api/contacts/${contact._id}`, contact, config);

    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //Delete Contacts
  const deleteContact = async id => {
    await axios.delete(`/api/contacts/${id}`);
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Clear Contacts
  const clearContacts = () => dispatch({ type: CLEAR_CONTACTS });

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
        getContacts,
        clearContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
