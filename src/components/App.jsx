import { Section } from './Section';
import { Box } from './Box';
import { Contacts } from './Contacts';
import { PhonebookForm } from './PhonebookForm';
import { Filter } from './Contacts/Filter';
import { useSelector } from 'react-redux';
import { getError, getRequestStatus } from 'redux/contacts';
import { Loader } from './Loader/Loader';
import { toast } from 'react-toastify';

export const App = () => {
  const isLoading = useSelector(state => getRequestStatus(state));
  const error = useSelector(state => getError(state));
  isLoading
    ? (document.body.style.cursor = 'wait')
    : (document.body.style.cursor = 'auto');

  !error && toast.error(error, { autoClose: 5000 });

  return (
    <Box as="main">
      <Section tittle="Phonebook">
        <PhonebookForm />
      </Section>
      <Section tittle="Contacts">
        <Filter />
        <Contacts />
      </Section>
      {isLoading && <Loader />}
    </Box>
  );
};
