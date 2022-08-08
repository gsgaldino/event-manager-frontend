import React from 'react';

import * as S from './styles';

export interface IProviderProps {
  children: React.ReactNode;
}

const Provider: React.FunctionComponent<IProviderProps> = ({ children }) => (
  <S.Provider>
    {children}
  </S.Provider>
);

export default Provider;
