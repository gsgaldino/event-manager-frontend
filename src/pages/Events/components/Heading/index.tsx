import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Provider from 'components/Provider';
import Typography from 'components/Typography';
import Input from 'components/Input';
import IconButton from 'components/IconButton';
import { openModal } from 'store/modules/user/slice';

import PlusIcon from 'assets/icons/PlusIcon';
import LupaIcon from 'assets/icons/LupaIcon';

import { rootState } from 'store';
import { toast } from 'components/CustomToast';
import * as S from './styles';

const Heading: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loggedUser } = useSelector((s: rootState) => s.user);

  const onClick = () => {
    const isLogged = Boolean(loggedUser.dashboardToken);

    if (isLogged) {
      dispatch(openModal('createEvent'));
    } else {
      navigate('/login');
      toast.warn('Você precisa estar logado para criar um evento');
    }
  };

  return (
    <Provider>
      <S.Wrapper>
        <Typography variant="h1-strong">Eventos mais próximos</Typography>

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
