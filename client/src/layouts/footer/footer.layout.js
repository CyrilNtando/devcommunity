import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4.37rem;
  position: absolute;
  background-color: #f5f5f5;
  z-index: 1000;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  box-sizing: border-box;
`;
export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Typography paragraph={true}>
          Copyright 2018 Developer Community
        </Typography>
      </FooterContainer>
    );
  }
}
