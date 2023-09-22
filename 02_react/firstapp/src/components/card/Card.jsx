import React from 'react'

const Card = (props) => {
    const {title,img,category,desc,price} = props.data;
  return (
    <div className="card"  style={{width:"24rem",}}>
  <img className="card-img-top" src={img} alt="Card"/>
  <div className="card-body">
    <div className='d-flex justify-content-around'>

    <h5 className="card-title">{title}</h5>
    <h5 className="card-title ">price - {price}</h5>
    </div>
    <h5 className="card-title">{category}</h5>
    <p className="card-text">{desc.substring(0,90)}</p>
    <a href="#" className="btn btn-danger">Shop Now</a>
  </div>
</div>
  )
}

export default Card