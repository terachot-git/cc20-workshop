import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
    const {carts,decQuantity,addToCart}=props
    console.log(props)
    let itemPrice  = carts.reduce((prv,cur)=>{
      return prv + cur.quantity*cur.price
    },0)
    let tax = itemPrice *0.07
  return (
    <div className='w-1/3 bg-green-200 p-6'>
        <h2 className='text-2xl'>Cart Items : </h2>
        {carts.map((el)=><CartItem item={el} key={el.id} addToCart={addToCart} decQuantity={decQuantity} />)  }
        <hr />
        <div className='flex justify-between'>
            <p>Item Price</p>
            <p>{itemPrice.toFixed(2)}</p>
        </div>
        <div className='flex justify-between'>
            <p>Tax</p>
            <p>{tax.toFixed(2)}</p>
        </div>
        <div className='flex justify-between'>
            <p>Total</p>
            <p>{(itemPrice+tax).toFixed(2)}</p>
        </div>
    </div>

  )
}

export default CartSummary