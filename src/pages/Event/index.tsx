import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { getEvent } from 'store/modules/event/slice';
import { rootState } from 'store';

import Provider from 'components/Provider';
import Typography from 'components/Typography';
import IconButton from 'components/IconButton';

import BackIcon from 'assets/icons/BackIcon';
import EventInfo from './components/EventInfo';
import EventDate from './components/EventDate';
import EventParticipants from './components/EventParticipants';

import * as S from './styles';

const Event: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { eventId } = useParams();

  const { event } = useSelector((s: rootState) => s.event);

  useEffect(() => {
    dispatch(getEvent(eventId));
  }, [eventId]);

  const onBack = () => navigate('/events');

  return (
    <Provider>
      <S.BackButton>
        <IconButton onClick={onBack} size="small" variant="ghost" squared>
          <BackIcon />
        </IconButton>
        <Typography variant="h2-strong">{event.name}</Typography>
      </S.BackButton>

      <S.Container>
        <EventDate />
        <EventInfo />
        <EventParticipants />
      </S.Container>
    </Provider>
  );
};

export default Event;
