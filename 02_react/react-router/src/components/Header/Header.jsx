import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div style={{backgroundColor:'gray',color:'white',padding:'10px',display:'flex',justifyContent:'space-between'}} >
        <div>Navbar</div>
        <Link to="/about">About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default Header