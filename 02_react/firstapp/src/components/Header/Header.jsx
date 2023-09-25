import React from 'react'

const Header = () => {
  return (
    <div className='d-flex justify-content-between px-5 bg-black text-white'>
      <h1>Food App</h1>
      <div className='d-flex gap-2 mt-3'>
        Cart
        <p>0</p>
      </div>
      </div>
  )
}

export default Header