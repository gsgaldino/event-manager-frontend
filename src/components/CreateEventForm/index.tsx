import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from 'components/Input';
import Button from 'components/Button';
import TextArea from 'components/TextArea';

import { createEvent } from 'store/modules/event/slice';
import * as S from './styles';

const CreateEventForm: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const [fields, setFields] = useState({
    name: '',
    description: '',
    date: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createEvent(fields));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <Input onChange={onChange} name="name" type="text" placeholder="Título" />
      <TextArea placeholder="Descrição" onChange={onChange} name="description" />
      <Input onChange={onChange} name="date" type="datetime-local" placeholder="Descrição" />
      <Button>Criar</Button>
    </S.Form>
  );
};

export default CreateEventForm;
