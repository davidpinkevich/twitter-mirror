import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  UID: '',
};

const sliceMemory = createSlice({
  initialState,
  name: 'sliceMemory',
  reducers: {
    changeUID: (state, action: PayloadAction<string>) => {
      state.UID = action.payload;
    },
  },
  selectors: {
    getUID: (state) => state.UID,
  },
});

export const { changeUID } = sliceMemory.actions;
export const { getUID } = sliceMemory.selectors;

export default sliceMemory.reducer;
