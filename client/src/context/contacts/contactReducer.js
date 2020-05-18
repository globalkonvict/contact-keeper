import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

import ReducerWare from './ReducerWare';

function contactReducer(state, { type, payload }) {
  if (type === ADD_CONTACT) {
    return ReducerWare.applyAddContact(state, payload);
  }
  if (type === UPDATE_CONTACT) {
    return ReducerWare.applyUpdateContact(state, payload);
  }
  if (type === DELETE_CONTACT) {
    return ReducerWare.applyDeleteContact(state, payload);
  }
  if (type === FILTER_CONTACTS) {
    return ReducerWare.applyFilter(state, payload);
  }
  if (type === CLEAR_FILTER) {
    return ReducerWare.applyClearFilter(state);
  }
  if (type === SET_CURRENT) {
    return ReducerWare.applySetCurrent(state, payload);
  }
  if (type === CLEAR_CURRENT) {
    return ReducerWare.applyClearCurrent(state);
  }
  return state;
}

export default contactReducer;
