import React from 'react';

import RegisterForm from 'components/RegisterForm';
import Typography from 'components/Typography';

import * as S from './styles';

const Register: React.FunctionComponent = () => (
  <S.Container>
    <Typography variant="h3-normal">Cadastre-se</Typography>

    <RegisterForm />
  </S.Container>
);

export default Register;
