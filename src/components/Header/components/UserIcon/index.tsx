import React from 'react';
import { useSelector } from 'react-redux';

import Typography from 'components/Typography';

import { rootState } from 'store';

import * as S from './styles';

const UserIcon: React.FunctionComponent = () => {
  const { loggedUser } = useSelector((s: rootState) => s.user);

  const { acronym } = loggedUser;

  return (
    <S.Container>
      <Typography variant="h3-normal">{acronym}</Typography>
    </S.Container>
  );
};

export default UserIcon;
