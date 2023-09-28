import React from 'react'
import { Link } from 'react-router-dom';
import { IMG_URL } from '../../constants/constants';

const Card = (props) => {
    const {id,name,cloudinaryImageId,locality,areaName,totalRatingsString,cuisines
,costForTwo,avgRating} = props.data.info
  return (
      <Link style={{textDecoration:'none'}} className='link-none' to={`product-details/${id}`}>
    <div className="card"  style={{width:"24rem",}}>

  <img className="card-img-top" src={IMG_URL+cloudinaryImageId} alt="Card"/>
  <div className="card-body">
    <div className='d-flex justify-content-between'>

    <h5 className="card-title">{name}</h5>
    <h5 className="card-title ">price - {costForTwo}</h5>
    </div>
    <h5 className="card-title">{areaName}</h5>
    
    <Link to="#" className="btn btn-danger">Add to cart</Link>
  </div>
</div>
      </Link>
  )
}

export default Card