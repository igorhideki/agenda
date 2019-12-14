import styled from 'styled-components';

export const Container = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 16px;

  > button {
    flex-shrink: 0;
    margin-left: auto;
  }
`;

export const Logo = styled.img`
  width: 148px;
  height: 32px;
  object-fit: contain;
  margin-right: 24px;
`;
