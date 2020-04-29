import { useState } from 'react';

function useMenuState(initialValue = null) {
  const [anchorEl, setState] = useState(initialValue);
  const handleClose = () => {
    setState(null);
  };
  const handleChange = (event) => {
    setState(event.target.checked);
  };
  const handleMenu = (event) => {
    setState(event.currentTarget);
  };

  return [anchorEl, handleChange, handleMenu, handleClose];
}

export default useMenuState;
