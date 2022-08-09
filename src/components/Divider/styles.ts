import styled from 'styled-components';

export const Divider = styled.div`
  position: relative;
  padding-block: var(--spacement-x-large);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: var(--gray-light);
  }
`;
