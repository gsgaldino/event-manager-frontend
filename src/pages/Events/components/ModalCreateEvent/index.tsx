import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'components/Modal';
import CreateEventForm from 'components/CreateEventForm';

import { rootState } from 'store';
import { closeModal } from 'store/modules/user/slice';

const ModalCreateEvent: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const { createEvent } = useSelector((s: rootState) => s.user.modals);

  const onClose = () => dispatch(closeModal('createEvent'));

  return (
    <Modal isOpen={createEvent} onClose={onClose} title="Criar evento">
      <CreateEventForm />
    </Modal>
  );
};

export default ModalCreateEvent;
