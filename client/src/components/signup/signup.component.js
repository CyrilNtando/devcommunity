import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/user.action';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { PaperContainer } from './signup.styles';
import Container from '@material-ui/core/Container';
import useInputState from '../../hooks/useInputState';
function SignUp(props) {
  const [userInput, handleChange, handleReset] = useInputState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { name, email, password, passwordConfirm } = userInput;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signup(userInput);
    handleReset();
  };
  return (
    <Container maxWidth='sm'>
      <Typography variant='h3'>Create your Account</Typography>
      <PaperContainer>
        <form onSubmit={handleSubmit}>
          <TextField
            required={true}
            className='spacing'
            name='name'
            value={name}
            onChange={handleChange}
            margin='normal'
            label='Name'
            fullWidth
          />
          <TextField
            required={true}
            type='email'
            className='spacing'
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
            className='spacing'
            name='password'
            value={password}
            onChange={handleChange}
            margin='normal'
            label='Password'
            fullWidth
          />
          <TextField
            required={true}
            type='password'
            className='spacing'
            name='passwordConfirm'
            value={passwordConfirm}
            onChange={handleChange}
            margin='normal'
            label='Confirm password'
            fullWidth
          />
          <Button type='submit' variant='contained' color='primary' fullWidth>
            Create Account
          </Button>
          <Typography variant='subtitle1'>
            Already have an account? <Link to='sign-in'>Sign in</Link>
          </Typography>
        </form>
      </PaperContainer>
    </Container>
  );
}
const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
  signup: (userData) => dispatch(signUp(userData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
