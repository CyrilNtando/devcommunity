import React from 'react';
import { withStyles, withTheme } from '@material-ui/styles';
import {
  RootContainer,
  StyledContainer,
  RightNavContainer,
  LeftNavContainer,
} from './navbar.styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CustomMenu from '../../components/menu/menu.component';
import useMenuState from '../../hooks/useMenuState.hook';
const MenuAppBar = () => {
  const [anchorEl, handleChange, handleMenu, handleClose] = useMenuState(null);
  return (
    <RootContainer>
      <AppBar position='static' color='default'>
        <Toolbar>
          <StyledContainer maxWidth='lg'>
            <LeftNavContainer>
              <Typography variant='h6'>Dev Community</Typography>
              <Button>Developers</Button>
            </LeftNavContainer>

            <RightNavContainer>
              <Button
                className='spacingRight'
                variant='outlined'
                color='primary'
              >
                Sign In
              </Button>
              <Button variant='contained' color='primary'>
                Sign Up
              </Button>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <CustomMenu
                anchorEl={anchorEl}
                handleChange={handleChange}
                handleClose={handleClose}
              />
            </RightNavContainer>
          </StyledContainer>
        </Toolbar>
      </AppBar>
    </RootContainer>
  );
};

export default MenuAppBar;
