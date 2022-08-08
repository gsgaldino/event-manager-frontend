import React from 'react';
import { Link } from 'react-router-dom';

import Provider from 'components/Provider';
import Button from 'components/Button';
import ProfileIcon from './components/ProfileIcon';
import * as S from './styles';

export interface IHeaderProps { }

const Header: React.FunctionComponent<IHeaderProps> = () => (
  <S.Container>
    <Provider>
      <S.Wrapper>
        <div>
          <Link to="/">
            <Button variant="link">Home</Button>
          </Link>
        </div>

        <S.ButtonsWrapper>
          <Link to="/login">
            <Button variant="link">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="link">Cadastro</Button>
          </Link>
        </S.ButtonsWrapper>

        <ProfileIcon />
      </S.Wrapper>
    </Provider>
  </S.Container>
);

export default Header;
