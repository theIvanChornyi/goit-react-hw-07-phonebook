import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63622ff57521369cd066ffc0.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'users/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'users/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'users/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const toogleFavorite = createAsyncThunk(
  'users/toogleFavorite',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.put(`/contacts/${contact.id}`, contact);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
