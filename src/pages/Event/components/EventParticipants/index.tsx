import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { rootState } from 'store';

import EventParticipant from '../EventParticipant';
import Heading from './components/Heading';

const EventParticipants: React.FunctionComponent = () => {
  const { event } = useSelector((s: rootState) => s.event);
  const { participants } = event;

  return (
    <div>
      <Heading />
      {participants.map((participant) => (
        <EventParticipant data={participant} key={participant} />
      ))}
    </div>
  );
};

export default memo(EventParticipants);
