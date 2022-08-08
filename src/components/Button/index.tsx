import React from 'react';
import cc from 'classcat';

import * as S from './styles';

export interface IButtonProps {
  children?: React.ReactElement | string;
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
}

const Button: React.FunctionComponent<IButtonProps> = ({ children, variant }) => (
  <S.Container className={cc([variant])}>
    {children}
  </S.Container>
);

Button.defaultProps = {
  variant: 'solid',
};

export default Button;
