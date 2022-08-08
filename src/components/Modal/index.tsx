import React from 'react';

import ModalHeader from './ModalHeader';
import * as S from './styles';

interface IModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <S.Background isOpen={isOpen || false} onClick={onClick}>
      <S.Modal>
        <ModalHeader title={title} onClose={onClose} />
        <S.ModalContent>
          {children}
        </S.ModalContent>
      </S.Modal>
    </S.Background>
  );
};

export { ModalHeader };
export default Modal;
