import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Drawer } from '@mui/material';

import styles from './navbar.module.scss';

const Navbar = ({onClickCart}) => {
  const [menuState, setMenuState] = useState(false);

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
      <button type='button' onClick={onClickCart}>CART</button>
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
      <div className={styles.links}>
        <Button color="black" variant="text" component={Link} to="/">
          HOME
        </Button>
        <Button color="black" variant="text" component={Link} to="/shop">
          SHOP
        </Button>
        <Button color="black" variant="text" onClick={onClickCart}>
          CART
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
