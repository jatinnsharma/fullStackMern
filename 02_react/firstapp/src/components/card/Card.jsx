import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {id,title,img,category,desc,price} = props.data;
  return (
      <Link style={{textDecoration:'none'}} className='link-none' to={`product-details/${id}`}>
    <div className="card"  style={{width:"24rem",}}>

  <img className="card-img-top" src={img} alt="Card"/>
  <div className="card-body">
    <div className='d-flex justify-content-between'>

    <h5 className="card-title">{title}</h5>
    <h5 className="card-title ">price - {price}</h5>
    </div>
    <h5 className="card-title">{category}</h5>
    <p className="card-text">{desc.substring(0,90)}</p>
    <a href="/" className="btn btn-danger">Add to cart</a>
  </div>
</div>
      </Link>
  )
}

export default Card