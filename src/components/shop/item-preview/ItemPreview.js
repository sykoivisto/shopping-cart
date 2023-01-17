import React from 'react'

import './itemPreview.scss'

const ItemPreview = ({name, price, img}) => {
  return(
    <div className="item">
      <img src={img} alt={name} />
      <p className='name'>{name}</p>
      <p className='price'>${price}.00</p>
    </div>
  )
}

export default ItemPreview;