import styled from 'styled-components';

export const TextArea = styled.textarea`
  background: var(--gray-light);
  border: none;
  padding: calc(var(--spacement-small) * 2);
  font-size: 16px;
  transition: box-shadow 0.2s ease-in-out;
  border-radius: var(--radius-small);
  position: relative;
  width: 100%;
  resize: vertical;
  max-height: 80vh;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 16px;
  color: var(--gray-dark);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #6690ff;
  }

  &::placeholder {
    color: var(--gray-dark);
  }
`;
