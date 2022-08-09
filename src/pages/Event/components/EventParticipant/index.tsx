import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Typography from 'components/Typography';
import IconButton from 'components/IconButton';

import CloseIcon from 'assets/icons/CloseIcon';

import { removeParticipants } from 'store/modules/event/slice';
import { rootState } from 'store';
import * as S from './styles';

const EventParticipant = ({ data }: { data: string }) => {
  const dispatch = useDispatch();
  const avatarText = `${data[0]}${data[1]}`;

  const { loggedUser } = useSelector((s: rootState) => s.user);
  const { event } = useSelector((s: rootState) => s.event);

  const isAdministrator = () => {
    const isLogged = Boolean(loggedUser.dashboardToken);

    if (!isLogged) return false;

    return true;
  };

  const onDelete = () => {
    dispatch(removeParticipants({ eventId: event.id, email: data }));
  };

  return (
    <S.Participant>
      <S.FlexItem>
        <S.Avatar>
          <Typography as="small">
            {avatarText}
          </Typography>
        </S.Avatar>
        <Typography>
          {data}
        </Typography>
      </S.FlexItem>

      {isAdministrator() && (
      <IconButton onClick={onDelete} variant="ghost" size="small">
        <CloseIcon />
      </IconButton>
      )}
    </S.Participant>
  );
};

export default EventParticipant;
