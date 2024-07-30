import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ThemeMode } from 'constants/themeMode';
const initialState = {
  UID: '',
  theme: ThemeMode.WHITE,
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
  },
  selectors: {
    getUID: (state) => state.UID,
    getTheme: (state) => state.theme,
  },
});

export const { changeUID, changeTheme } = sliceMemory.actions;
export const { getUID, getTheme } = sliceMemory.selectors;

export default sliceMemory.reducer;
