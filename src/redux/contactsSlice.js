import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+380-32-459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '+980-32-443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '180-32-645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '380-32-227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: initialContacts,
  },
  reducers: {
    addContact(state, action) {
      state.value = [...state.value, action.payload];
    },
    deleteContact(state, action) {
      state.value = state.value.filter(({ id }) => id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = ({ contacts: { value } }) => value;
