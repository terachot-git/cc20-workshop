import React from 'react'

function CartItem(props) {
  const {item:{title,id,price,quantity},decQuantity,addToCart}=props
  return (
    <div className='flex justify-between items-baseline px-1.5'>
        <p className='flex w-1/2'>{title.split(' ')[0]+' '+title.split(' ')[1]}</p>
        <div className='flex gap-1 grow'>
        <button className='btn'onClick={()=>decQuantity(quantity,id)} >-</button>
        <button className='btn'onClick={()=>addToCart(id)}>+</button>
        </div>
        <p>{quantity} * ${price}</p>
    </div>
    
  )
}

export default CartItem