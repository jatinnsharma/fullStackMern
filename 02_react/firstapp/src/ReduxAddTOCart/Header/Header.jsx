import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const getData = useSelector((state)=>state.cartReducer)
    console.log(getData)
  return (
    <div className='flex justify-around bg-gray-700 text-white' >
        <div>Home</div>
        <div>Card-{getData.length}</div>
    </div>
  )
}

export default Header