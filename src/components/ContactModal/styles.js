import styled from 'styled-components';

import { colors } from '~/styles/variables';

export const Container = styled.div`
  label {
    display: block;
    font-size: 14px;
  }

  label + label {
    margin-top: 16px;
  }

  input {
    background: #fff;
    border-radius: 4px;
    border: 1px solid ${colors.borderGray};
    font-size: 14px;
    height: 32px;
    padding: 0 10px;
    display: block;
    margin-top: 4px;
    width: 100%;
  }

  input[type='tel'] {
    width: 128px;
  }
`;
