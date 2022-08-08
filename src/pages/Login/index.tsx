import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from 'components/Input';
import Button from 'components/Button';
import Typography from 'components/Typography';

import { login } from 'store/modules/user/slice';
import { rootState } from 'store';

import * as S from './styles';

const Login: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const { loggedUser } = useSelector((s: rootState) => s.user);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(fields));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  console.log('LOGGED', loggedUser);

  return (
    <S.Container>
      <Typography variant="h3-normal">Login</Typography>

      <S.Form onSubmit={onSubmit}>
        <Input onChange={onChange} name="email" type="email" placeholder="E-mail" />
        <Input onChange={onChange} name="password" type="password" placeholder="Senha" />

        <Button>Entrar</Button>
      </S.Form>
    </S.Container>
  );
};

export default Login;
