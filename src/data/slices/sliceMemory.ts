import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ThemeMode } from 'constants/themeMode';
const initialState = {
  UID: '',
  theme: ThemeMode.WHITE,
  openModal: false,
};

const sliceMemory = createSlice({
  initialState,
  name: 'sliceMemory',
  reducers: {
    changeUID: (state, action: PayloadAction<string>) => {
      state.UID = action.payload;
    },
    changeTheme: (state) => {
      state.theme = state.theme === ThemeMode.DARK ? ThemeMode.WHITE : ThemeMode.DARK;
    },
    logOut: (state) => {
      state.UID = '';
    },
    changeModal: (state) => {
      state.openModal = !state.openModal;
    },
  },
  selectors: {
    getUID: (state) => state.UID,
    getTheme: (state) => state.theme,
    getModal: (state) => state.openModal,
  },
});

export const { changeUID, changeTheme, logOut, changeModal } = sliceMemory.actions;
export const { getUID, getTheme, getModal } = sliceMemory.selectors;

export default sliceMemory.reducer;
