import React from 'react';
import Spinner from 'components/Spinner';

import * as S from './styles';

const LoadingFullSize: React.FunctionComponent = () => (
  <S.Background>
    <Spinner color="primary" />
  </S.Background>
);

export default LoadingFullSize;
