export interface CreateEvent {
  payload: {
    name: string;
    description: string;
    date: string;
  }
}

export interface AddParticipants {
  payload: {
    eventId: string;
    emails: string[];
  }
}

export interface RemoveParticipants {
  payload: {
    eventId: string;
    email: string;
  }
}
