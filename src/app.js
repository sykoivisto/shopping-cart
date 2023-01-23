import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Drawer } from '@mui/material';

import Cart from './components/cart/Cart';

import RouteSwitch from './RouteSwitch';

import itemData from './data/itemData';

import './index.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import '@fontsource/roboto/900-italic.css';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#f97316',
      darker: '#c2410c',
    },
    neutral: {
      main: '#737373',
      contrastText: '#fafafa',
    },
    black: {
      main: '#171717',
    },
  },
});


const App = () => {
  const [cartState, setCartState] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      item: {
        name: 'Core i7, RTX 3080',
        price: 1950,
        img: 'https://dummyimage.com/200x200/f97316/ffffff',
        id: 1000
      },
      quantity: 1
    },
    {
      item: {
        name: 'Core i5, RTX 3070',
        price: 1000,
        img: 'https://dummyimage.com/200x200/f97316/ffffff',
        id: 1000
      },
      quantity: 1
    }
  ]);

  const toggleDrawer = (open, callback) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    callback(open);
  };

  const findItemInData = (id) => {
    return Object.values(itemData).flat().find(item => item.id === id);
  }

  const itemInCart = (id) => {
    return cartItems.find(item => item.item.id === id);
  }

  const addItem = (id) => {
    setCartItems(cartItems.concat({
      item: findItemInData(id),
      quantity: 1
    }))
  }

  const deleteItem = (search) => {
    setCartItems(cartItems.filter((item) => {
      return item.item.id !== search.id;
    }))
  }

  const incrementQuantity = (search) => {
    const tCartItems = cartItems;

    // eslint-disable-next-line
    tCartItems.find((item, i) => {
      if (item.item.id === search.id) {
        tCartItems[i].quantity += 1;
        return true;
      }
    })

    setCartItems(tCartItems);
  }

  const decrementQuantity = (search) => {
    const tCartItems = cartItems;

    // eslint-disable-next-line
    tCartItems.find((item, i) => {
      if (item.item.id === search.id) {
        tCartItems[i].quantity -= 1;
        return true;
      }
    })

    setCartItems(tCartItems);
  }

  return (
    <ThemeProvider theme={theme}>
      <RouteSwitch cartController={{itemInCart, addItem, deleteItem, incrementQuantity, decrementQuantity}} onClickCart={toggleDrawer(true, setCartState)}/>
      <Drawer anchor='right' open={cartState} onClose={toggleDrawer(false, setCartState)}>
        <Cart cartController={{itemInCart, addItem, deleteItem, incrementQuantity, decrementQuantity}} onClose={toggleDrawer(false, setCartState)} cartItems={cartItems}/>
      </Drawer>
    </ThemeProvider>
  )
}

export default App;