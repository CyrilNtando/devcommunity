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
import { AppBarContainer } from './navbar.styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { getAuthUser } from '../../store/actions/user.action';
import AuthLinks from './authLinks.layout';
import GuestLinks from './guestLinks.layout';
const MenuAppBar = ({ currentUser, user }) => {
  const { isAuthenticated } = user;
  useEffect(() => {
    currentUser();
  }, [currentUser]);
  return (
    <AppBarContainer elevation={0} position='fixed' color='default'>
      <Toolbar>
        <StyledContainer maxWidth='lg'>
          <LeftNavContainer>
            <Typography variant='h6'>
              <Link className='nav__link' to='/'>
                Dev Community
              </Link>
            </Typography>
            <Button component={Link} to='/profiles'>
              Developers
            </Button>
          </LeftNavContainer>
          <RightNavContainer>
            {isAuthenticated ? <AuthLinks /> : <GuestLinks />}
          </RightNavContainer>
        </StyledContainer>
      </Toolbar>
    </AppBarContainer>
  );
};

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
  currentUser: () => dispatch(getAuthUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar);
