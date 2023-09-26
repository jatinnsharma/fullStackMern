import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = (props) => {
    const {id,image,title,price,description} = props.data 
  return (
  <div className='card w-92 m-10 text-center'>
      <Link to={`products-details/${id}`}>
    <img src={image}  style={{ width: "10vw", height: "25vh", margin:"auto"}} className="card-img-top pt-2" alt="..." />
    </Link>
    <div className="card-body">
      <h5 className="card-title">{title.substring(0,20)}</h5>
      <p className="card-text">Price : ${price}</p>
      <p className="card-text">{description.substring(0,60)}</p>
      <Link  to= '' className="btn btn-danger">Add to cart</Link>
    </div>
  </div>
  ) 
}

export default ProductCard