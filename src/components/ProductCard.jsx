import React from 'react'
import { useState } from 'react'
function ProductCard(props) {
    
    const {Products:{id,category,description,title,image,price,rating},addToCart}=props
    const [showDesc,setShowDesc]=useState(false)
  return (
    <div className="card bg-base-100 w-70 shadow-sm m-2">
  <figure className='h-40'>
    <img className='h-full'
      src={image}
     />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className={`cursor-pointer ${showDesc?'':'line-clamp-2'}`}
    onClick={()=>setShowDesc(prv=>!prv)}>{description}</p>
    <p className='text-2xl'>$ {price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>addToCart(id,title,price)}>Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard