import { Global } from '@emotion/react';
import { Layout } from './Layout/Layout';
import { Style } from './GlobalStyle';
import { useEffect, useState } from 'react';
import { ContactForm } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Title } from './Contacts/Contacts.styled';
import { ContactsFilter } from './Filter/Filter';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+380-32-459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '+980-32-443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '180-32-645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '380-32-227-91-26' },
];
const getInitialContacts = () => {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  const initContacts = savedContacts ? savedContacts : initialContacts;
  const sortedContacts = initContacts.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
  return sortedContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');
  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const hasName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (hasName) return window.alert(`${name} is allready in contacts`);
    setContacts(prevContact =>
      [...prevContact, contact].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      )
    );
  };
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  const resetFormFilter = e => {
    e.preventDefault();
    setFilter('');
  };
  const getVisibleContact = () => {
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      {!!contacts.length && (
        <>
          <Title>Contacts</Title>
          <ContactsFilter
            value={filter}
            onChange={e => setFilter(e.currentTarget.value.trim())}
            onClick={resetFormFilter}
          />
          <Contacts
            contacts={getVisibleContact()}
            onDeleteContact={deleteContact}
          />
        </>
      )}
      <Global styles={Style} />
    </Layout>
  );
};
