import styled, { css } from 'styled-components';
import { Container } from '@material-ui/core';

const middleCenter = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RootContainer = styled.div`
  flex-grow: 1;
`;
export const StyledContainer = styled(Container)`
  ${middleCenter}
  justify-content: space-between;
`;

export const RightNavContainer = styled.div`
  ${middleCenter}
  justify-content: space-between;
  button:not(:last-child) {
    margin-right: 30px;
  }
`;
export const LeftNavContainer = styled.div`
  ${middleCenter}
  justify-content: space-between;
  button {
    margin-left: 30px;
  }
`;
