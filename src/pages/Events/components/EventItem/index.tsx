import React from 'react';
import { Link } from 'react-router-dom';

import Typography from 'components/Typography';
import Format from 'utils/formatDate';

import * as S from './styles';

export interface IEventItemProps {
  name: string;
  description: string;
  date: string;
  id: string;
}

const EventItem: React.FunctionComponent<IEventItemProps> = ({
  name,
  description,
  date,
  id,
}) => (
  <Link to={`/events/${id}`}>
    <S.Container>
      <S.Date>
        <Typography variant="h1-normal">{Format.toSmallDate(date)}</Typography>
      </S.Date>
      <S.Description>
        <Typography variant="h1-normal">{name}</Typography>
        <Typography>{description}</Typography>
      </S.Description>
    </S.Container>
  </Link>
);

export default EventItem;
