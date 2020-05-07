import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  RootContainer,
  StyledContainer,
  RightNavContainer,
  LeftNavContainer,
} from './navbar.styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { getCurrentUser } from '../../store/actions/user.action';
import AuthLinks from './authLinks.layout';
import GuestLinks from './guestLinks.layout';
const MenuAppBar = ({ currentUser, user }) => {
  const { isAuthenticated } = user;
  useEffect(() => {
    currentUser();
  }, [currentUser]);
  return (
    <RootContainer>
      <AppBar position='fixed' color='default'>
        <Toolbar>
          <StyledContainer maxWidth='lg'>
            <LeftNavContainer>
              <Typography variant='h6'>
                <Link className='nav__link' to='/'>
                  Dev Community
                </Link>
              </Typography>
              <Button component={Link} to="/developer'">
                Developers
              </Button>
            </LeftNavContainer>
            <RightNavContainer>
              {isAuthenticated ? <AuthLinks /> : <GuestLinks />}
            </RightNavContainer>
          </StyledContainer>
        </Toolbar>
      </AppBar>
    </RootContainer>
  );
};

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
  currentUser: () => dispatch(getCurrentUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar);
