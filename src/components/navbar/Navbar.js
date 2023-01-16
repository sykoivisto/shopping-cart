import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Drawer } from '@mui/material';

import './navbar.scss';

const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setMenuState(open);
  };

  const links = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="dropdown"
    >
      <Link to="/">HOME</Link>
      <Link to="/shop">SHOP</Link>
      <a href="#">CART</a>
    </Box>
  );

  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/">REDITEK</Link>
      </span>
      <Button id="hamburger" color="black" onClick={toggleDrawer(true)}>
        Menu
      </Button>
      <Drawer anchor="top" open={menuState} onClose={toggleDrawer(false)}>
        {links}
      </Drawer>
      <div className="links">
        <Button color="black" variant="text" component={Link} to="/">
          HOME
        </Button>
        <Button color="black" variant="text" component={Link} to="/shop">
          SHOP
        </Button>
        <Button color="black" variant="text">
          CART
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
