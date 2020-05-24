import React, { useContext } from 'react';
import ContactContext from '../../context/contacts/ContactContext';
import ContactCard from './ContactCard';
import ContactFilter from './ContactFilter';

const ContactList = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  return (
    <div>
      <ContactFilter />
      {filtered !== null
        ? filtered.map(contact => (
            <ContactCard key={contact._id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactCard key={contact._id} contact={contact} />
          ))}
    </div>
  );
};

export default ContactList;
