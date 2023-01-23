import React from 'react'
import { Button } from '@mui/material'

import styles from './itemPreview.module.scss'

const ItemPreview = ({name, price, img, id, cartController, onClickCart}) => {

  const onClickAddToCart = (item) => {
    cartController.addItem(item);
    onClickCart();
  }

  const dynamicButton = (itemInCart) => {
    if (itemInCart) {
      return(
        <Button onClick={onClickCart} color="success" variant='outlined' className={styles.cartButton}>Item In Cart</Button>
      )
    }
    return(
      <Button onClick={() => onClickAddToCart(id)} variant='outlined' className={styles.cartButton}>Add to Cart</Button>
    )
  }

  return(
    <div className={styles.item}>
      <img src={img} alt={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>${price}.00</p>
      {dynamicButton(cartController.itemInCart(id))}
    </div>
  )
}

export default ItemPreview;