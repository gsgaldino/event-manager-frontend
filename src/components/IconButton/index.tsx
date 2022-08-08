import React from 'react';
import cc from 'classcat';

import * as S from './styles';

enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface IIconButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  color?: Color;
  variant?: 'solid' | 'ghost' | 'outline';
  squared?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const IconButton: React.FunctionComponent<IIconButtonProps> = ({ children, ...props }) => (
  <S.Container
    className={cc([props.variant, props.color, props.size])}
    disabled={props.disabled}
    squared={props.squared || false}
    onClick={props.onClick}
  >
    {children || props.icon}
  </S.Container>
);

IconButton.defaultProps = {
  color: Color.Primary,
  variant: 'solid',
  squared: false,
  size: 'medium',
};

export default IconButton;
