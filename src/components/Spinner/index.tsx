import React from 'react';
import cc from 'classcat';

import * as S from './styles';

export interface ISpinnerProps {
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

const Spinner: React.FunctionComponent<ISpinnerProps> = ({ color }) => (
  <S.Spinner className={cc([color])} />
);

Spinner.defaultProps = {
  color: 'secondary',
};

export default Spinner;
