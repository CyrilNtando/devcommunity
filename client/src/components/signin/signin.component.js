import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { PaperContainer } from './signin.styles';
import Container from '@material-ui/core/Container';
import useInputState from '../../hooks/useInputState';
function SignIn() {
  const [userInput, handleChange, handleReset] = useInputState({
    email: '',
    password: '',
  });
  const { email, password } = userInput;
  return (
    <Container maxWidth='sm'>
      <Typography variant='h3'>Welcome back, Sign in</Typography>
      <PaperContainer>
        <TextField
          required={true}
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          margin='normal'
          label='Email'
          fullWidth
        />
        <TextField
          required={true}
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          margin='normal'
          label='Password'
          fullWidth
        />

        <Button variant='contained' color='primary' fullWidth>
          Sign in
        </Button>
        <Typography variant='subtitle1'>
          Don't have an account? Create Account
        </Typography>
      </PaperContainer>
    </Container>
  );
}

export default SignIn;
