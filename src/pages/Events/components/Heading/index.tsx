import React from 'react';
import { useDispatch } from 'react-redux';

import Provider from 'components/Provider';
import Typography from 'components/Typography';
import Input from 'components/Input';
import IconButton from 'components/IconButton';
import { openModal } from 'store/modules/user/slice';

import PlusIcon from 'assets/icons/PlusIcon';
import LupaIcon from 'assets/icons/LupaIcon';
import * as S from './styles';

const Heading: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(openModal('createEvent'));

  return (
    <Provider>
      <S.Wrapper>
        <Typography variant="h1-strong">Eventos</Typography>

        <S.Buttons>
          <IconButton squared onClick={onClick}>
            <PlusIcon />
          </IconButton>
          <Input placeholder="Pesquisar ..." endIcon={<LupaIcon />} />
        </S.Buttons>
      </S.Wrapper>
    </Provider>
  );
};

export default Heading;
