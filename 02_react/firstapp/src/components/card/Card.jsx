import React from 'react'
import { Link } from 'react-router-dom';
import { IMG_URL } from '../../constants/constants';

const Card = (props) => {
    const {id,name,cloudinaryImageId,locality,areaName,totalRatingsString,cuisines
,costForTwo,avgRating} = props.data.info
  return (
      <Link style={{textDecoration:'none'}} className='link-none' to={`product-details/${id}`}>
    <div className="card"  style={{width:"18rem",}}>

  <img className="card-img-top" src={IMG_URL+cloudinaryImageId} alt="Card"/>
  <div className="card-body">
    
    <h5 className="card-title">{name}</h5>
    <h5 className="card-title">{avgRating}</h5>
    <h5>{cuisines.join(', ')}</h5>
    <h5 className="card-title">{areaName}</h5>    
  </div>
</div>
      </Link>
  )
}

export default Card