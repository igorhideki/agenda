import styled from 'styled-components';

import { colors } from '~/styles/variables';

export const Container = styled.div`
  background: ${colors.lightGray};
  max-width: 1032px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-left: 24px;

  input {
    flex: 1;
    height: 32px;
    background: transparent;
    border: 0;
    padding: 0 8px;

    &::placeholder {
      color: ${colors.gray};
    }
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: text;
  }

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin: 8px;
  }
`;
