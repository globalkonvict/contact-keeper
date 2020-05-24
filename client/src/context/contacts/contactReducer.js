import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  GET_CONTACT,
  CONTACT_ERROR,
  CLEAR_CONTACTS,
} from '../types';

import ReducerWare from './ReducerWare';

function contactReducer(state, { type, payload }) {
  switch (type) {
    case ADD_CONTACT:
      return ReducerWare.applyAddContact(state, payload);
    case UPDATE_CONTACT:
      return ReducerWare.applyUpdateContact(state, payload);
    case DELETE_CONTACT:
      return ReducerWare.applyDeleteContact(state, payload);
    case GET_CONTACT:
      return ReducerWare.applyGetContacts(state, payload);
    case FILTER_CONTACTS:
      return ReducerWare.applyFilter(state, payload);
    case CLEAR_FILTER:
      return ReducerWare.applyClearFilter(state);
    case SET_CURRENT:
      return ReducerWare.applySetCurrent(state, payload);
    case CLEAR_CURRENT:
      return ReducerWare.applyClearCurrent(state);
    case CONTACT_ERROR:
      return ReducerWare.applyContactError(state, payload);
    case CLEAR_CONTACTS:
      return ReducerWare.applyClearContacts(state);
    default:
      return state;
  }
}

export default contactReducer;
