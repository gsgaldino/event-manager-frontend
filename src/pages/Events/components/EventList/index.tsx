import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Provider from 'components/Provider';

import { rootState } from 'store';
import { getPublicEvents } from 'store/modules/event/slice';
import EventItem from '../EventItem';

import * as S from './styles';

const EventList: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const { publicEvents } = useSelector((s: rootState) => s.event);

  useEffect(() => {
    dispatch(getPublicEvents());
  }, []);

  return (
    <Provider>
      <S.Wrapper>
        {publicEvents.map((event: any) => (
          <div key={event.id}>
            <EventItem date={event.date} description={event.description} name={event.name} />
          </div>
        ))}
      </S.Wrapper>
    </Provider>
  );
};

export default EventList;
