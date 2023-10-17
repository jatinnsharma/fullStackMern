import React from 'react'

const Header = () => {
  return (
    <div className='d-flex justify-content-between items-center p-3 bg-black text-white'>
      <h1>Food App</h1>
      <div className='flex gap-2 items-center'>
        <li>About</li>
        <li>contact</li>
        <li>Home</li>
        <li>Cart</li>
      </div>
      </div>
  )
}

export default Header