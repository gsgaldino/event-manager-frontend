import styled from 'styled-components';

export const CustomInput = styled.input`
  background: var(--gray-light);
  border: none;
  padding: calc(var(--spacement-small) * 2);
  font-size: 16px;
  transition: box-shadow 0.2s ease-in-out;
  border-radius: var(--radius-small);
  position: relative;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #6690ff;
  }

  &::placeholder {
    color: var(--gray-dark);
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const EndIcon = styled.div`
  position: absolute;
  right: var(--spacement-default);
  top: var(--spacement-default);
  cursor: pointer;
`;
