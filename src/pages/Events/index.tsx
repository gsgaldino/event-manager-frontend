import React from 'react';

import Heading from './components/Heading';
import EventList from './components/EventList';
import ModalCreateEvent from './components/ModalCreateEvent';

import * as S from './styles';

export interface IEventsProps {}

const Events: React.FunctionComponent<IEventsProps> = () => (
  <S.Container>
    <Heading />
    <EventList />
    <ModalCreateEvent />
  </S.Container>
);

export default Events;
