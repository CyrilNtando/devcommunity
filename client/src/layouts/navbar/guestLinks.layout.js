import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
export default function GuestLinks() {
  return (
    <>
      <Button
        component={Link}
        to='/sign-in'
        className='spacingRight'
        color='primary'
      >
        Sign In
      </Button>
      <Button component={Link} to='/sign-up' color='primary'>
        Sign Up
      </Button>
    </>
  );
}
