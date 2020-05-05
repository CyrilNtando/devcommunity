import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, HeaderBoxContainer } from '../homepage/homepage.styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
export default class HomePage extends Component {
  render() {
    return (
      <HomeContainer>
        <HeaderBoxContainer>
          <Typography variant='h1' color='#fff'>
            Developer Community
          </Typography>
          <Typography paragraph='true' color='#fff'>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </Typography>
          <div className='headerBox__btn-container'>
            <Button
              component={Link}
              to='/sign-in'
              className='spacingRight'
              variant='outlined'
              color='primary'
            >
              Sign In
            </Button>
            <Button
              component={Link}
              to='/sign-up'
              variant='contained'
              color='primary'
            >
              Sign Up
            </Button>
          </div>
        </HeaderBoxContainer>
      </HomeContainer>
    );
  }
}
