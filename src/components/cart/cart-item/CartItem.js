import React, { useEffect, useState } from 'react';

import styles from './cartItem.module.scss'

const CartItem = ({item, quantity, cartController}) => {

  const [inputVal, setInputVal] = useState(quantity);

  useEffect(() => {
    cartController.updateQuantity(item.id, inputVal);
  }, [inputVal])

  return (
    <div className={styles.item}>
      <div className={styles.imgWrapper}>
        <img src={item.img} alt={item.name} />
      </div>
      <div className={styles.center}>
        <button type='button' onClick={() => cartController.deleteItem(item.id)} className={styles.removeButton}>X</button>
        <p className={styles.itemName}>{item.name}</p>
        <p>${item.price}</p>
        <div className={styles.buttonGroup}>
          <button type='button' onClick={() => inputVal > 1 ? setInputVal(Number(inputVal) - 1) : null} className={styles.buttonQuantity}>-</button>
          <input type='number' min='1' className={styles.quantityText} value={inputVal} onChange={e => setInputVal(e.target.value)}/>
          <button type='button' onClick={() => setInputVal(Number(inputVal) + 1)} className={styles.buttonQuantity}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;