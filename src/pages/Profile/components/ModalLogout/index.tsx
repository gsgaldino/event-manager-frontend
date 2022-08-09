import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'components/Modal';
import Typography from 'components/Typography';
import Button from 'components/Button';

import { rootState } from 'store';
import { closeModal, logout } from 'store/modules/user/slice';

import { toast } from 'components/CustomToast';
import * as S from './styles';

const ModalCreateEvent: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const { logout: isLogoutModalOpen } = useSelector((s: rootState) => s.user.modals);

  const onClose = () => dispatch(closeModal('logout'));

  const onLogout = () => {
    dispatch(logout());
    onClose();
    toast.success('Logout realizado com sucesso!');
  };

  return (
    <Modal isOpen={isLogoutModalOpen} onClose={onClose} title="Logout">
      <S.Wrapper>
        <Typography variant="body1">Deseja mesmo sair?</Typography>
        <Button onClick={onLogout} color="danger">Sair</Button>
      </S.Wrapper>
    </Modal>
  );
};

export default ModalCreateEvent;
