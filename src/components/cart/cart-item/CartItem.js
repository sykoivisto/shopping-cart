import React from 'react';

import styles from './cartItem.module.scss'

const CartItem = ({item, quantity}) => {

  return (
    <div className={styles.item}>
      <div className={styles.imgWrapper}>
        <img src={item.img} alt={item.name} />
      </div>
      <div className={styles.center}>
        <p className={styles.itemName}>{item.name}</p>
        <p>${item.price}</p>
        <div className={styles.buttonGroup}>
          <button type='button' className={styles.button}>-</button>
          <input className={styles.quantityText} value={quantity}/>
          <button type='button' className={styles.button}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;