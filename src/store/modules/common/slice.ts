import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isLoading: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default commonSlice.reducer;
export const { setLoading } = commonSlice.actions;
