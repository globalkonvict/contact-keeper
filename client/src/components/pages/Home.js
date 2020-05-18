import React from 'react';
import ContactList from '../contacts/ContactList';
import ContactForm from '../contacts/ContactForm';

export const Home = () => {
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
