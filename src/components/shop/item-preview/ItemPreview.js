import React from 'react'

import { Button } from '@mui/material'

import styles from './itemPreview.module.scss'

const ItemPreview = ({name, price, img}) => {
  return(
    <div className={styles.item}>
      <img src={img} alt={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>${price}.00</p>
      <Button>Add to Cart</Button>
    </div>
  )
}

export default ItemPreview;