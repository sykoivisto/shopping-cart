import React from 'react'
import { Button } from '@mui/material';
import CartItem from './cart-item/CartItem'

import styles from './cart.module.scss'

const Cart = ({cartController, onClose, cartItems}) => {

  if (cartItems.length > 0) {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.closeButton} type='button' onClick={onClose}>x</button>
        <p className={styles.title}>Your<br/>Shopping<br/>Cart</p>
        <div className={styles.items}>
          {cartItems.map((item) => {
            return <CartItem key={item.item.name} item={item.item} quantity={item.quantity} cartController={cartController}/>
          })}
        </div>
        <div className={styles.total}>
          <p>Subtotal: ${cartItems.reduce((running, x) => running + x.item.price*x.quantity, 0)}</p>
          <Button className={styles.button} variant='outlined'>Checkout</Button>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className={styles.cartContainer}>
        <button className={styles.closeButton} type='button' onClick={onClose}>x</button>
        <p className={styles.title}>Your<br/>Shopping<br/>Cart</p>
        <p className={styles.emptyCart}>Your Cart is Empty!</p>
      </div>
    </div>
  )
}

export default Cart;