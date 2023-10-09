import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../action/action'

const Card = (props) => {
    const { id,title,category,price,img}  = props.data
    const dispatch = useDispatch()
  return (
    <div className='w-44 h-40 p-2'>
        <img src={img} alt="..." />
        <h5>{category}</h5>
        <h5>{title}</h5>
        <h5>{price}</h5>
        <h5>{id}</h5>
        <button onClick={()=>dispatch(addToCart(props))}>Add to cart</button>
    </div>
  )
}

export default Card