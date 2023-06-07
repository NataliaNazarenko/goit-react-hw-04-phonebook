import { useState } from 'react';
import { Container } from './App.styled.jsx';
import { Section } from 'components/Section/index.js';
import { ContactForm } from 'components/ContactForm/index.js';
import { ContactList } from 'components/ContactList/index.js';
import { Filter } from 'components/Filter/index.js';
import useLocalStorage from '../../hooks/useLocalStorage.js';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = contact => {
    const existingContact = contacts.find(cont => cont.name === contact.name);

    if (existingContact) {
      alert(`Contact with name "${contact.name}" already exists!`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = e => {
    setFilter({ filter: e.target.value });
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>

      <Section title="Contacts">
        <Filter title="Find contact by name" onChange={handleFilterChange} value={filter} />
        <ContactList contacts={getFilteredContacts()} onDeleteContact={handleDeleteContact} />
      </Section>
    </Container>
  );
}
