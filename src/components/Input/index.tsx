import React, { forwardRef } from 'react';

import * as S from './styles';

export interface IInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  endIcon?: React.ReactNode;
  label?: string;
  readOnly?: boolean;
  disabled?: boolean;
}

const Input = forwardRef((props: IInputProps, ref: any) => {
  const {
    type,
    value,
    placeholder,
    onChange,
    name,
    endIcon,
    label,
    readOnly,
    disabled,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.CustomInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange || handleChange}
        name={name}
        readOnly={readOnly}
        disabled={disabled}
        ref={ref}
      />
      <S.EndIcon>
        {endIcon}
      </S.EndIcon>
    </S.Container>
  );
});

export default Input;
