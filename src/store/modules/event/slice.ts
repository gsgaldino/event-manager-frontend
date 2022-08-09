import { createSlice } from '@reduxjs/toolkit';
import * as types from './types';

const INITIAL_STATE = {
  publicEvents: [],
  event: {
    id: '',
    name: '',
    deleted: false,
    description: '',
    date: '',
    user: {
      email: '',
      acronym: '',
    },
    participants: [],
  },
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
    getEvent: (draft, { payload }) => {},
    getEventSuccess: (draft, { payload }: { payload: any }) => {
      draft.event = payload;
    },
    addParticipants: (draft, { payload }: types.AddParticipants) => {},
    addParticipantsSuccess: (draft, { payload }: { payload: any }) => {
      draft.event.participants = JSON.parse(payload.participants);
    },
    removeParticipants: (draft, { payload }: types.RemoveParticipants) => {},
    removeParticipantsSuccess: (draft, { payload }: { payload: any }) => {
      draft.event.participants = JSON.parse(payload.participants);
    },
  },
});

export default eventSlice.reducer;
export const {
  getPublicEvents,
  getPublicEventsSuccess,
  createEvent,
  createEventSuccess,
  getEvent,
  getEventSuccess,
  addParticipants,
  addParticipantsSuccess,
  removeParticipants,
  removeParticipantsSuccess,
} = eventSlice.actions;
