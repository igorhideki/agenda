import styled from 'styled-components';

import { colors } from '~/styles/variables';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  background: #fff;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  max-width: 432px;
  width: 100%;
`;

export const Header = styled.header`
  padding: 16px;
  border-bottom: 1px solid ${colors.borderGray};

  h4 {
    font-size: 16px;
    font-weight: normal;
  }
`;

export const Body = styled.div`
  padding: 24px;
  min-height: 90px;
  font-size: 14px;
`;

export const Footer = styled.footer`
  padding: 16px;
  border-top: 1px solid ${colors.borderGray};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > button + button {
    margin-left: 4px;
  }
`;
