import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import RouteSwitch from './RouteSwitch';

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
  const [cartItems, setCartItems] = useState([]);

  const itemInCart = (search) => {
    return cartItems.find(item => item.item.id === search.id);
  }

  const addItem = (newItem) => {
    setCartItems(cartItems.concat({
      item: newItem,
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
      <RouteSwitch/>
    </ThemeProvider>
  )
}

export default App;