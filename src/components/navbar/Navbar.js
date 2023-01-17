import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Drawer } from '@mui/material';

import styles from './navbar.module.scss';

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
      className={styles.dropdown}
    >
      <Link to="/">HOME</Link>
      <Link to="/shop">SHOP</Link>
      <p>CART</p>
    </Box>
  );

  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>
        <Link to="/">REDITEK</Link>
      </span>
      <Button id={styles.hamburger} color="black" onClick={toggleDrawer(true)}>
        Menu
      </Button>
      <Drawer anchor="top" open={menuState} onClose={toggleDrawer(false)}>
        {links}
      </Drawer>
      <div className={styles.links}>
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
