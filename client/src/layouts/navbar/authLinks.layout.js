import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CustomMenu from '../../components/menu/menu.component';
import Button from '@material-ui/core/Button';
import useMenuState from '../../hooks/useMenuState.hook';
const AuthLinks = function () {
  const [anchorEl, handleChange, handleMenu, handleClose] = useMenuState(null);
  return (
    <>
      <Button className='spacingRight' component={Link} to='/posts'>
        Post Feeds
      </Button>
      <Button className='spacingRight' component={Link} to='/dashboard'>
        DashBoard
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
    </>
  );
};
export default AuthLinks;
