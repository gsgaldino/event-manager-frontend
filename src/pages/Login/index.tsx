import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import Button from 'components/Button';
import Typography from 'components/Typography';

import { login } from 'store/modules/user/slice';
import { rootState } from 'store';

import * as S from './styles';

const Login: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((s: rootState) => s.common);

  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({
      ...fields,
      callback: () => navigate('/events'),
    }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  return (
    <S.Container>
      <Typography variant="h3-normal">Login</Typography>

      <S.Form onSubmit={onSubmit}>
        <Input onChange={onChange} name="email" type="email" placeholder="E-mail" />
        <Input onChange={onChange} name="password" type="password" placeholder="Senha" />

        <Button loading={isLoading}>Entrar</Button>
      </S.Form>
    </S.Container>
  );
};

export default Login;
