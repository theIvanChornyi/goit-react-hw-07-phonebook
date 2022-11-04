import { createSelector } from '@reduxjs/toolkit';
import { getAllContacts } from 'redux/contacts';

export const getUsersQuery = state => state.filter.filter;

export const getFiltredUsers = createSelector(
  getAllContacts,
  getUsersQuery,
  (contactList, query) => {
    return contactList.filter(contact =>
      contact.name?.toLowerCase().includes(query)
    );
  }
);
