import React from 'react';
import Spinner from 'components/Spinner';

import * as S from './styles';

const LoadingFullSize: React.FunctionComponent = () => (
  <S.Background>
    <Spinner />
  </S.Background>
);

export default LoadingFullSize;
