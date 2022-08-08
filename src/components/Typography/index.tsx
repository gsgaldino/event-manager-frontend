import React from 'react';
import cc from 'classcat';

import * as S from './styles';

enum Variants {
  'h1-normal' = 'h1',
  'h1-strong' = 'h1',
  'h1-black' = 'h1',
  'h2-normal' = 'h2',
  'h2-strong' = 'h2',
  'h3-normal' = 'h3',
  'h3-strong' = 'h3',
  'p' = 'p',
}

export interface ITypographyProps {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: string;
}

const Typography: React.FunctionComponent<ITypographyProps> = ({ children, as, variant }) => (
  <S.Container className={cc([variant])} as={as || Variants[variant as keyof typeof Variants]}>
    {children}
  </S.Container>
);

Typography.defaultProps = {
  variant: 'p',
};

export default Typography;
