import { createSlice } from '@reduxjs/toolkit';
import * as types from './types';

const INITIAL_STATE = {
  publicEvents: [],
};

const eventSlice = createSlice({
  name: 'event',
  initialState: INITIAL_STATE,
  reducers: {
    createEvent: (_, { payload }: types.CreateEvent) => {},
    createEventSuccess: (draft: any, { payload }: { payload: any }) => {
      draft.publicEvents.push(payload);
    },
    getPublicEvents: () => {},
    getPublicEventsSuccess: (draft, { payload }: { payload: any }) => {
      draft.publicEvents = payload;
    },
  },
});

export default eventSlice.reducer;
export const {
  getPublicEvents,
  getPublicEventsSuccess,
  createEvent,
  createEventSuccess,
} = eventSlice.actions;
