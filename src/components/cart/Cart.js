import React from 'react'

const Cart = (cartItems) => {


  const emptyCart = <div>
    <p>The Cart is Empty!</p>
  </div>

  const cartWithItems = <div>
    <p>Items in the cart</p>
  </div>

  return(
    <div>
      {!cartItems ? emptyCart : cartWithItems}
    </div>
  )
}

export default Cart;