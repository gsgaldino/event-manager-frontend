import React from 'react';

import Typography from 'components/Typography';
import IconButton from 'components/IconButton';

import CloseIcon from 'assets/icons/CloseIcon';
import { ModalHeader } from './styles';

interface IModalHeaderProps {
  title?: string | React.ReactNode;
  onClose?: () => void;
}

const ModalHeaderWrapper: React.FunctionComponent<IModalHeaderProps> = ({ title, onClose }) => (
  <ModalHeader>
    {(title && <Typography variant="h3-normal">{title}</Typography>)}

    <IconButton onClick={onClose} size="small" variant="ghost" squared>
      <CloseIcon />
    </IconButton>
  </ModalHeader>
);

export default ModalHeaderWrapper;
