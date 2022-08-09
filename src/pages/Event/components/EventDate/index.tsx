import React from 'react';

import { useSelector } from 'react-redux';

import Typography from 'components/Typography';

import CalendarIcon from 'assets/icons/CalendarIcon';
import FormatDate from 'utils/formatDate';
import * as S from './styles';

const EventDate: React.FunctionComponent = () => {
  const { event } = useSelector((state: any) => state.event);

  return (
    <S.EventDate>
      <S.EventDay>
        <Typography variant="h1-normal">
          {FormatDate.getDay(event.date)}
        </Typography>
        <Typography variant="h3-normal">
          {FormatDate.getMonthString(event.date)}
        </Typography>
        <Typography>
          {FormatDate.getDayString(event.date)}
        </Typography>

        <S.Hour>
          <Typography>
            {FormatDate.getHours(event.date)}
          </Typography>
        </S.Hour>
      </S.EventDay>

      <S.CalendarIcon>
        <CalendarIcon />
      </S.CalendarIcon>
    </S.EventDate>
  );
};

export default EventDate;
