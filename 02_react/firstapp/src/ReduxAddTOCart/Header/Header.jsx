import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const cartData = useSelector((state)=>state.cart.items)
  // console.log(cartData)
  return (
    <div className='flex justify-around bg-gray-700 text-white' >
        <div>Home</div>
        <Link to={'/cart'}>Card-{cartData.length}</Link>
    </div>
  )
}

export default Header