import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Provider from 'components/Provider';

import { rootState } from 'store';
import { getPublicEvents } from 'store/modules/event/slice';
import Typography from 'components/Typography';
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
        {publicEvents.length ? publicEvents.map((event: any) => (
          <div key={event.id}>
            <EventItem
              id={event.id}
              date={event.date}
              description={event.description}
              name={event.name}
            />
          </div>
        )) : (
          <Typography>
            Nenhum evento criado, seja o primeiro!
          </Typography>
        )}
      </S.Wrapper>
    </Provider>
  );
};

export default EventList;
