import React from 'react';

import * as S from './styles';

export interface ITextAreaProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}

const TextArea: React.FunctionComponent<ITextAreaProps> = ({
  onChange,
  placeholder,
  disabled,
  value,
  name,
}) => (
  <S.TextArea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
  />
);

export default TextArea;
