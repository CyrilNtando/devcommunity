import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { PaperContainer } from './signup.styles';
import Container from '@material-ui/core/Container';
import useInputState from '../../hooks/useInputState';
function SignUp() {
  const [userInput, handleChange, handleReset] = useInputState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = userInput;
  return (
    <Container maxWidth='sm'>
      <Typography variant='h3'>Create your Account</Typography>
      <PaperContainer>
        <TextField
          name='name'
          value={name}
          onChange={handleChange}
          margin='normal'
          label='Name*'
          fullWidth
        />
        <TextField
          name='email'
          value={email}
          onChange={handleChange}
          margin='normal'
          label='Email*'
          fullWidth
        />
        <TextField
          name='password'
          value={password}
          onChange={handleChange}
          margin='normal'
          label='Password*'
          fullWidth
        />
        <TextField
          name='password2'
          value={password2}
          onChange={handleChange}
          margin='normal'
          label='Confirm password*'
          fullWidth
        />
        <Button variant='contained' color='primary' fullWidth>
          Create Account
        </Button>
        <Typography variant='subtitle1'>
          Already have an account? Sign in
        </Typography>
      </PaperContainer>
    </Container>
  );
}

export default SignUp;
