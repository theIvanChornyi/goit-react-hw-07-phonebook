import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export const ProviderStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
