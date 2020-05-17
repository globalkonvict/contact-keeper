import React, { useContext } from 'react';
import ContactContext from '../../context/contacts/ContactContext';
import ContactCard from './ContactCard';

const ContactList = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <div>
      {contacts.map(contact => (
        <ContactCard key={contact.name} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
