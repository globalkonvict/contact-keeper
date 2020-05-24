import React, { useState, useEffect, useContext } from 'react';
import ContactContext from '../../context/contacts/ContactContext';

const ContactFilter = () => {
  const { filterContacts, clearFilter } = useContext(ContactContext);
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value !== '') {
      filterContacts(value);
    } else {
      clearFilter();
    }
    // eslint-disable-next-line
  }, [value]);

  return (
    <form className="box search-contacts">
      <input
        className="input is-outlined is-info"
        placeholder="Search"
        type="text"
        name="search"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
