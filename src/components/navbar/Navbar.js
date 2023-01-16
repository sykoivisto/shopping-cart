import React from 'react';

import './navbar.scss'

import { Box, Button, Drawer } from '@mui/material'

const Navbar = () => {

  const [menuState, setMenuState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuState(open);
  }

  const links = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className='dropdown'
    >
      <a href='#'>HOME</a>
      <a href='#'>SHOP</a>
      <a href='#'>CART</a>
    </Box>
  )

  return(
    <div className='navbar'>
      <span className='logo'><a href='#'>REDITEK</a></span>
      <Button id='hamburger' color='black' onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer
        anchor='top'
        open={menuState}
        onClose={toggleDrawer(false)}
      >
        {links}
      </Drawer>
      <div className='links'>
        <Button color='black' variant="text">HOME</Button>
        <Button color='black' variant="text">SHOP</Button>
        <Button color='black' variant="text">CART</Button>
      </div>
    </div>
  )
}
export default Navbar;