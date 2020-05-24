import React, { useContext, useEffect } from 'react';
import ContactList from '../contacts/ContactList';
import ContactForm from '../contacts/ContactForm';
import AuthContext from '../../context/auth/AuthContext';
import ContactContext from '../../context/contacts/ContactContext';

export const Home = () => {
  const { loadUser } = useContext(AuthContext);
  const { getContacts } = useContext(ContactContext);

  useEffect(() => {
    loadUser();
    getContacts();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="columns is-centered has-rem-margin-bottom-3 has-margin-top-50">
        <div className="column is-4 has-rem-padding-2">
          <ContactForm />
        </div>
        <div className="column is-4 is-offset-1 has-rem-padding-2">
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Home;
