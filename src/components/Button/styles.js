import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { colors } from '../../styles/variables';

export const Container = styled.button`
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  padding: 0 16px;
  border-radius: 20px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(255, 255, 255, 0.16);

  ${props => {
    switch (props.color) {
      case 'primary':
        return css`
          background: ${colors.primary};
          color: #fff;

          &:hover {
            background: ${darken(0.05, colors.primary)};
          }
        `;
      case 'secondary':
        return css`
          background: transparent;
          color: ${colors.primary};
          border-color: transparent;
          box-shadow: none;

          &:hover {
            color: ${darken(0.05, colors.primary)};
          }
        `;
      case 'accent':
        return css`
          background: ${colors.accent};
          color: ${colors.primary};

          &:hover {
            background: ${darken(0.1, colors.accent)};
          }
        `;
      default:
        return css`
          background: ${colors.primary};
          color: #fff;

          &:hover {
            background: ${darken(0.05, colors.primary)};
          }
        `;
    }
  }};

  > img,
  > svg {
    margin-right: 8px;
    height: 16px;
    width: 16px;
    object-fit: contain;
  }
`;
