import { Contactlist } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { FilterContacts } from 'components/Filter/Filter';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles.styled';
import { Container } from 'components/Container/Container.styled';
import { MainTitle, SecondTitle } from './App.styled';

export const App = () => {
  // const addContact = newContact => {
  //   contacts.some(contact => contact.name === newContact.name)
  //     ? Notiflix.Report.failure(
  //         `${newContact.name}: is already in your contacts`
  //       )
  //     : setContacts(prevstate => [...prevstate, newContact]);
  // };

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <FilterContacts />
      <SecondTitle>Contacts</SecondTitle>
      <Contactlist />
      <GlobalStyles />
    </Container>
  );
};
