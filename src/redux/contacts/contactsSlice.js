import { createSlice } from '@reduxjs/toolkit';

import {
  deleteContact,
  fetchContacts,
  addContact,
  toogleFavorite,
} from './contactsOperatons';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(...action.payload);
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [toogleFavorite.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [toogleFavorite.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const theChanged = state.items.find(
        contact => contact.id === action.payload
      );
      theChanged.favorite = !theChanged.favorite;
    },
    [toogleFavorite.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
