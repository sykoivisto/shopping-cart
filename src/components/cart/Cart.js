import React from 'react'
import { Button } from '@mui/material';
import CartItem from './cart-item/CartItem'

import styles from './cart.module.scss'

const Cart = ({onClose, cartItems}) => {

  const getTotal = (array) => {
    let runningTotal = 0;
    array.forEach(item => {
      runningTotal += (item.item.price * item.quantity);
    });
    return runningTotal;
  }
  const total = getTotal(cartItems);

  if (cartItems.length > 0) {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.closeButton} type='button' onClick={onClose}>x</button>
        <p className={styles.title}>Your<br/>Shopping<br/>Cart</p>
        <div className={styles.items}>
          {cartItems.map((item) => {
            return <CartItem key={item.item.name} item={item.item} quantity={item.quantity}/>
          })}
        </div>
        <div className={styles.total}>
          <p>Subtotal: ${total}</p>
          <Button className={styles.button} variant='outlined'>Checkout</Button>
        </div>
      </div>
    )
  }
  return (
    <div>
      Nothing in the Cart
    </div>
  )
}

export default Cart;