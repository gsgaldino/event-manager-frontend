import { createSlice } from '@reduxjs/toolkit';
import * as types from './types';

const INITIAL_STATE = {
  loggedUser: {
    dashboardToken: '',
  },
  modals: {
    createEvent: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    openModal: (state: any, { payload }: any) => {
      const modal = payload;
      state.modals[modal] = true;
    },
    closeModal: (state: any, action) => {
      const modal = action.payload;
      state.modals[modal] = false;
    },
    register: (_, { payload }: types.Register) => {},
    registerSuccess: (draft, { payload }: types.LoginSuccess) => {
      draft.loggedUser = payload;
    },
    login: (_, { payload }: types.Login) => {},
    loginSuccess: (draft, { payload }: types.LoginSuccess) => {
      draft.loggedUser = payload;
    },
    getByEmail: () => {},
  },
});

export default userSlice.reducer;
export const {
  register,
  login,
  loginSuccess,
  openModal,
  closeModal,
  registerSuccess,
} = userSlice.actions;
