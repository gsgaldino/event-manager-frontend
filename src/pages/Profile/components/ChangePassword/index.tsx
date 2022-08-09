import React from 'react';

import Input from 'components/Input';
import Typography from 'components/Typography';
import Button from 'components/Button';

import * as S from './styles';

const ChangePassword: React.FunctionComponent = () => (
  <S.Container>
    <Typography variant="h4-normal">Alterar senha</Typography>
    <S.Wrapper>
      <Input label="Senha atual" />
      <Input label="Nova senha" />
      <Input label="Repita a nova senha" />
      <Button>Salvar</Button>
    </S.Wrapper>
  </S.Container>
);

export default ChangePassword;
