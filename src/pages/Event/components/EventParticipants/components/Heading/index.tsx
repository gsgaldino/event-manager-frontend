import React, { useCallback, memo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from 'components/Input';
import Typography from 'components/Typography';
import Button from 'components/Button';
import { addParticipants } from 'store/modules/event/slice';

import { rootState } from 'store';

import * as S from './styles';

const Heading = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { event } = useSelector((s: rootState) => s.event);
  const { loggedUser } = useSelector((s: rootState) => s.user);

  const isAdministrator = () => {
    const isLogged = Boolean(loggedUser.dashboardToken);

    if (!isLogged) return false;

    return true;
  };

  const onAddParticipant = useCallback(
    () => {
      dispatch(addParticipants({
        eventId: event.id,
        emails: [emailRef.current?.value || ''],
      }));
    },
    [event],
  );

  return (
    <S.Heading>
      <S.FlexItem>
        <Typography variant="h3-normal">Participantes</Typography>
      </S.FlexItem>
      {isAdministrator() && (
        <S.FlexItem>
          <Input ref={emailRef} placeholder="email@dominio.com" />
          <Button onClick={onAddParticipant}>Adicionar</Button>
        </S.FlexItem>
      )}
    </S.Heading>
  );
};

export default memo(Heading);
