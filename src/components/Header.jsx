import React from 'react'
import CartCount from './CartCount'

function Header(props) {
    const {itemCount} = props
    
  return (
    <div className='flex justify-between h-15 bg-amber-100 p-6'>
        <div>
            Logo,Brand
        </div>
        <CartCount itemCount={itemCount}/>
    </div>
  )
}

export default Header