import styled from 'styled-components';

export const Container = styled.section`
  max-width: 600px;
  margin: 0 auto;
  margin-block: var(--spacement-x-large);
  display: flex;
  flex-direction: column;
  gap: var(--spacement-large);
  min-height: 60vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-large);
`;
