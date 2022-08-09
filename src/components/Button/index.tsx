import React from 'react';
import cc from 'classcat';

import Spinner from '../Spinner';

import * as S from './styles';

export interface IButtonProps {
  children?: React.ReactElement | string;
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  loading?: boolean;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  variant,
  onClick,
  color,
  loading,
}) => (
  <S.Container className={cc([variant, color])} onClick={onClick}>
    {loading && <Spinner />}
    {children}
  </S.Container>
);

Button.defaultProps = {
  variant: 'solid',
  color: 'primary',
};

export default Button;
