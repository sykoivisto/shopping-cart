import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Drawer } from '@mui/material';

import Cart from '../cart/Cart';

import styles from './navbar.module.scss';

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);

  const toggleDrawer = (open, callback) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    callback(open);
  };

  const links = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false, setMenuState)}
      onKeyDown={toggleDrawer(false, setMenuState)}
      className={styles.dropdown}
    >
      <Link to="/">HOME</Link>
      <Link to="/shop">SHOP</Link>
      <button type='button' onClick={toggleDrawer(true, setCartState)}>CART</button>
    </Box>
  );

  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>
        <Link to="/">REDITEK</Link>
      </span>
      <Button id={styles.hamburger} color="black" onClick={toggleDrawer(true, setMenuState)}>
        Menu
      </Button>
      <Drawer anchor="top" open={menuState} onClose={toggleDrawer(false, setMenuState)}>
        {links}
      </Drawer>
      <Drawer anchor='right' open={cartState} onClose={toggleDrawer(false, setCartState)}>
        <Cart/>
      </Drawer>
      <div className={styles.links}>
        <Button color="black" variant="text" component={Link} to="/">
          HOME
        </Button>
        <Button color="black" variant="text" component={Link} to="/shop">
          SHOP
        </Button>
        <Button color="black" variant="text" onClick={toggleDrawer(true, setCartState)}>
          CART
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
