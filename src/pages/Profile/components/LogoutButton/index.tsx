import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';
import Typography from 'components/Typography';

import { openModal } from 'store/modules/user/slice';
import * as S from './styles';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(openModal('logout'));
  };

  return (
    <S.Wrapper>
      <Typography variant="h4-normal">Sair</Typography>
      <Button color="danger" onClick={onClick}>Logout</Button>
    </S.Wrapper>
  );
};

export default LogoutButton;
