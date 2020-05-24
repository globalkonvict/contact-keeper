import React, { useContext } from 'react';
import ContactContext from '../../context/contacts/ContactContext';

export const ContactCard = ({ contact }) => {
  const { _id, name, email, phone, type } = contact;
  const { deleteContact, setCurrent, clearCurrent } = useContext(
    ContactContext
  );
  const handleDelete = e => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card has-rem-margin-bottom-3 has-margin-top-15">
      <header className="card-header">
        <p className="card-header-title">{name}</p>
        <div className="card-header-icon">
          <span
            className={`tag is-small ${
              type === 'personal' ? 'is-danger' : 'is-warning'
            }`}
          >
            {type[0].toUpperCase() + type.slice(1)}
          </span>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          {email && (
            <h6 className="subtitle is-6 has-margin-bottom-0 has-padding-bottom-10 ">
              <i className="fas fa-envelope-open has-text-info has-margin-right-15" />
              {email}
            </h6>
          )}
          {phone && (
            <h6 className="subtitle is-6 has-margin-bottom-0 ">
              <i className="fas fa-phone has-text-info has-margin-right-15" />
              {phone}
            </h6>
          )}
        </div>
      </div>
      <footer className="card-footer has-padding-10 align-left-right">
        <button
          className="button  is-black has-rem-margin-left-2"
          onClick={e => setCurrent(contact)}
        >
          Edit
        </button>
        <button
          className="button is-danger has-rem-margin-right-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      </footer>
    </div>
  );
};

export default ContactCard;
