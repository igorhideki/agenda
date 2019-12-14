import styled from 'styled-components';

import { colors } from '~/styles/variables';

export const Container = styled.div`
  border-radius: 4px;
  border: 1px solid ${colors.borderLightGray};
  overflow: auto;

  table {
    width: 100%;
    background: #fff;
    border-collapse: collapse;

    thead {
      text-align: left;
      color: ${colors.gray};
      font-size: 13px;

      th {
        height: 40px;
        font-weight: normal;
        border-bottom: 1px solid ${colors.borderLightGray};
      }
    }

    tbody {
      text-align: left;
      font-size: 14px;

      td {
        height: 40px;
        font-weight: normal;
      }

      tr + tr > td {
        border-top: 1px solid ${colors.borderLightGray};
      }

      tr {
        background-color: #fff;
        transition: background-color 0.2s;

        &:hover {
          background-color: ${colors.pinkLight};
        }
      }
    }
  }
`;

export const Avatar = styled.div`
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background-color: ${props => props.color || colors.gray};
  color: #fff;
  line-height: 24px;
`;

export const Actions = styled.td`
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 16px;

    button {
      margin: 0;
      padding: 0;
      border: 0;
      cursor: pointer;
      background-color: transparent;

      img {
        width: 16px;
        height: 16px;
        object-fit: contain;
      }
    }

    > button + button {
      margin-left: 24px;
    }
  }
`;
