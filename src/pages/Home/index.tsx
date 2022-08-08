import React from 'react';
import { Link } from 'react-router-dom';

import Provider from 'components/Provider';
import Typography from 'components/Typography';
import Button from 'components/Button';

import * as S from './styles';

export interface IHomeProps { }

const Home: React.FunctionComponent<IHomeProps> = () => (
  <Provider>
    <S.Wrapper>
      <Typography variant="h1-black">
        Event Manager
      </Typography>
      <Typography>
        Gerencie e crie eventos de forma fácil.
      </Typography>

      <Link to="/events">
        <Button>Começar</Button>
      </Link>
    </S.Wrapper>
  </Provider>
);

export default Home;
