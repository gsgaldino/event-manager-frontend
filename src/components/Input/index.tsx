import React from 'react';

import * as S from './styles';

export interface IInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  endIcon?: React.ReactNode;
}

const Input: React.FunctionComponent<IInputProps> = ({
  type,
  value,
  placeholder,
  onChange,
  name,
  endIcon,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <S.Container>
      <S.CustomInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange || handleChange}
        name={name}
      />
      <S.EndIcon>
        {endIcon}
      </S.EndIcon>
    </S.Container>
  );
};

export default Input;
