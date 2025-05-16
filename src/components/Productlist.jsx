import React, { useState } from 'react'
import ProductCard from './ProductCard'

 function Productlist(props) {
   const {Products,addToCart}=props

  return (
    <div className='w-2/3 bg-blue-300 p-6 '>
        <h2>Product List</h2>
        <div className='flex w-full flex-wrap overflow-auto h-[80vh]'>
            {Products.map(el=> <ProductCard key={el.id} Products={el} addToCart={addToCart}/>)
           }
        </div>
    </div>

  )
}
export default Productlist