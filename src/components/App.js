import { Global } from '@emotion/react';
import { Layout } from './Layout/Layout';
import { Style } from './GlobalStyle';
import { ContactForm } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Title } from './Contacts/Contacts.styled';
import { ContactsFilter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      {!!contacts.length && (
        <>
          <Title>Contacts</Title>
          <ContactsFilter />
          <Contacts />
        </>
      )}
      <Global styles={Style} />
    </Layout>
  );
};
