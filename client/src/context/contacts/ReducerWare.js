/*
  Reducer Action-Type Handlers
  ****************************
* Abtracted Away function to declutter the reducer 
*/

//@action-type:  GET_CONTACTS
const applyGetContacts = (state, payload) => {
  return {
    ...state,
    contacts: payload,
  };
};

//@action-type:  ADD_CONTACT
const applyAddContact = (state, payload) => {
  return { ...state, contacts: [...state.contacts, payload] };
};

//@action-type:  UPDATE_CONTACT,
const applyUpdateContact = (state, payload) => {
  return {
    ...state,
    contacts: state.contacts.map(contact =>
      contact._id === payload._id ? payload : contact
    ),
  };
};

//@action-type:  DELETE_CONTACT,
const applyDeleteContact = (state, payload) => {
  return {
    ...state,
    contacts: state.contacts.filter(contact => contact._id !== payload),
  };
};

//@action-type:  FILTER_CONTACTS,
const applyFilter = (state, payload) => {
  return {
    ...state,
    filtered: state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(payload.toLowerCase()) ||
        contact.email.toLowerCase().includes(payload.toLowerCase())
    ),
  };
};

//@action-type:  CLEAR_FILTER
const applyClearFilter = state => {
  return {
    ...state,
    filtered: null,
  };
};

//@action-type:  SET_CURRENT
const applySetCurrent = (state, payload) => {
  return {
    ...state,
    current: payload,
  };
};

//@action-type:  CLEAR_CURRENT
const applyClearCurrent = state => {
  return {
    ...state,
    current: null,
  };
};

//@action-type:  CLEAR_CONTACT
const applyClearContacts = state => {
  return {
    ...state,
    error: null,
    contacts: [],
    current: null,
  };
};

//@action-type:  CONTACT_ERROR
const applyContactError = (state, payload) => {
  return {
    ...state,
    error: payload,
  };
};

export default {
  applyAddContact,
  applyUpdateContact,
  applyDeleteContact,
  applyFilter,
  applyClearFilter,
  applySetCurrent,
  applyClearCurrent,
  applyGetContacts,
  applyContactError,
  applyClearContacts,
};
