import styled from 'styled-components';

export const Date = styled.div`
  background: var(--primary);
  border-radius: var(--radius-medium) 0 0 var(--radius-medium);
  height: 140px;
  display: flex;
  flex-direction: column;
  width: 200px;
  display: grid;
  place-items: center;
  transition: background 0.2s ease-in-out;

  & h1 {
    text-transform: uppercase;
    word-wrap: wrap;
    font-size: 48px;
    color: var(--absolute-white);
    width: 100%;
    text-align: center;
  }
`;

export const Container = styled.div`
  border-radius: var(--radius-medium);
  border: 1px solid var(--gray-light);
  display: flex;
  justify-content: flex-start;
  max-width: 88%;
  margin: 0 auto;
  transition: border-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: var(--gray-dark);

    ${Date} {
      background: var(--primary-dark);
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacement-large);
  justify-content: center;
  gap: var(--spacement-large);

  & h1 {
    font-size: 28px;
  }

  & p {
    position: relative;
    max-width: 800px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
  }
`;
