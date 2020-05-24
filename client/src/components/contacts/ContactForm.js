import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contacts/ContactContext';

const ContactForm = () => {
  const { 
    addContact, 
    updateContact, 
    current, 
    clearCurrent } = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
  });

  const { name, email, phone, type } = contact;

  const onInput = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current !== null) {
      updateContact(contact);
      clearCurrent();
    } else {
      addContact(contact);
      setContact({
        name: '',
        email: '',
        phone: '',
        type: '',
      });
    }
  };

  useEffect(() => {
    if (current === null) {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: '',
      });
    } else {
      setContact(current);
    }
  }, [current]);

  return (
    <form onSubmit={onSubmit} className="box has-rem-padding-2">
      <h2 style={{ textAlign: 'center' }} className="title is-4">
        {current ? 'Update Contact' : 'Add Contact'}
      </h2>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onInput}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            name="email"
            className="input"
            type="email"
            placeholder="Email input"
            value={email}
            onChange={onInput}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope-open"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Phone</label>
        <div className="control has-icons-left has-icons-right">
          <input
            name="phone"
            className="input"
            type="text"
            placeholder="Text input"
            value={phone}
            onChange={onInput}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-phone"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <h6 className="subtitle is-5 has-rem-margin-top-2 has-rem-margin-bottom-1">
          Contact Type
        </h6>
        <div className="control">
          <label className="radio">
            <input
              type="radio"
              name="type"
              value="personal"
              checked={type === 'personal'}
              onChange={onInput}
            />
            Personal
          </label>
          <label className="radio">
            <input
              type="radio"
              name="type"
              value="professional"
              checked={type === 'professional'}
              onChange={onInput}
            />
            Professional
          </label>
        </div>
      </div>
      <div className="field is-grouped has-rem-margin-top-2">
        <div className="control">
          <button className="button is-link">
            {current ? 'Update Contact' : 'Add Contact'}
          </button>
        </div>
        {current && (
          <div className="control">
            <button
              className="button has-text-black is-warning"
              onClick={e => clearCurrent()}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
