import React from 'react';

import { Box, Button, Drawer } from '@mui/material'

import './navbar.scss'

import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Homepage from '../homepage/Homepage';
import Shop from '../shop/Shop';

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
    <BrowserRouter>
      <div className='navbar'>
        <span className='logo'><Link to='/'>REDITEK</Link></span>
        <Button id='hamburger' color='black' onClick={toggleDrawer(true)}>Menu</Button>
        <Drawer
          anchor='top'
          open={menuState}
          onClose={toggleDrawer(false)}
        >
          {links}
        </Drawer>
        <div className='links'>
          <Button color='black' variant="text" component={Link} to='/'>HOME</Button>
          <Button color='black' variant="text" component={Link} to='/shop'>SHOP</Button>
          <Button color='black' variant="text" >CART</Button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Navbar;