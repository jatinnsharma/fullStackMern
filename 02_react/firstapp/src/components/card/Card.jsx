import React from 'react'

const Card = (props) => {
    const {title,img,category,desc,price} = props.data;
  return (
    <div className="card"  style={{width:"18rem",margin:'40px'}}>
  <img className="card-img-top" src={img} alt="Card"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h5 className="card-title">{price}</h5>
    <h5 className="card-title">{category}</h5>
    <p className="card-text">{desc.substring(0,90)}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Card