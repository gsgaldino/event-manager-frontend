import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from 'components/Input';
import Button from 'components/Button';

import { register } from 'store/modules/user/slice';
import * as S from './styles';

const RegisterForm: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(register(fields));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  return (
    <S.Form name="register" onSubmit={onSubmit}>
      <Input onChange={onChange} type="email" name="email" placeholder="Email" />
      <Input onChange={onChange} type="password" name="password" placeholder="Senha" />
      <Input
        onChange={onChange}
        type="password"
        name="passwordConfirmation"
        placeholder="Repita sua senha"
      />
      <Button>Registrar-se</Button>
    </S.Form>
  );
};

export default RegisterForm;
