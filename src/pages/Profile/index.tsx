import React from 'react';
import { useSelector } from 'react-redux';

import Provider from 'components/Provider';
import Typography from 'components/Typography';
import Input from 'components/Input';
import Divider from 'components/Divider';
import IconButton from 'components/IconButton';
import { toast } from 'components/CustomToast';

import { rootState } from 'store';

import FormatDate from 'utils/formatDate';
import copyStringToClipboard from 'utils/copyStringToClipboard';

import CopyIcon from 'assets/icons/CopyIcon';
import ModalLogout from './components/ModalLogout';
import LogoutButton from './components/LogoutButton';
import ChangePassword from './components/ChangePassword';

import * as S from './styles';

const Profile: React.FunctionComponent = () => {
  const { loggedUser } = useSelector((s: rootState) => s.user);

  const onCopyClick = () => {
    copyStringToClipboard(loggedUser.id);
    toast.success('ID copiado com sucesso!');
  };

  return (
    <Provider>
      <S.Container>
        <Typography variant="h2-normal">Meu perfil</Typography>

        <S.Wrapper>
          <S.IdWrapper>
            <Input
              value={loggedUser.id}
              label="Id de usuario"
              readOnly
              disabled
            />
            <IconButton
              squared
              size="small"
              variant="outline"
              onClick={onCopyClick}
            >
              <CopyIcon />
            </IconButton>
          </S.IdWrapper>
          <Input
            value={loggedUser.email}
            placeholder="email"
            label="E-mail"
            readOnly
            disabled
          />
          <Input
            value={FormatDate.toFullDate(loggedUser.created_at)}
            placeholder="Data de criação"
            label="Data de criação"
            readOnly
            disabled
          />
        </S.Wrapper>

        <Divider />

        <ChangePassword />

        <Divider />

        <LogoutButton />
        <ModalLogout />
      </S.Container>
    </Provider>
  );
};

export default Profile;
