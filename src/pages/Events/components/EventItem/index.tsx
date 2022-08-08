import React from 'react';

import Typography from 'components/Typography';
import formatDate from 'utils/formatDate';

import * as S from './styles';

export interface IEventItemProps {
  name: string;
  description: string;
  date: string;
}

const EventItem: React.FunctionComponent<IEventItemProps> = ({ name, description, date }) => (
  <S.Container>
    <S.Date>
      <Typography variant="h1-normal">{formatDate(date)}</Typography>
    </S.Date>
    <S.Description>
      <Typography variant="h1-normal">{name}</Typography>
      <Typography>{description}</Typography>
    </S.Description>
  </S.Container>
);

export default EventItem;
