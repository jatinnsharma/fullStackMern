import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div style={{backgroundColor:'gray',color:'white',padding:'10px',display:'flex',justifyContent:'space-between'}} >
        <Link to='/'>Navbar</Link>
        <Link to="/about">About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
    </div>
  )
}

export default Header