import styled, { css } from 'styled-components';
import { Container, AppBar } from '@material-ui/core';

const middleCenter = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const AppBarContainer = styled(AppBar)`
  height: 4.37rem;
`;
export const StyledContainer = styled(Container)`
  ${middleCenter}
  justify-content: space-between;
`;

export const RightNavContainer = styled.div`
  ${middleCenter}
  justify-content: space-between;
  & .spacingRight {
    margin-right: 30px;
  }
`;
export const LeftNavContainer = styled.div`
  ${middleCenter}
  justify-content: space-between;
  & .nav__link,
  & .nav__link:link,
  & .nav__link:visited {
    text-decoration: none;
    color: inherit;
    margin-right: 30px;
  }
`;
