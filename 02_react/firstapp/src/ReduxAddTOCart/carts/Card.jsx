import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/reducer';


const Card = ({data}) => {
  // console.log(props)
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };
  
    const { id,title,category,price,img}  = data
  return (
    <div className='w-44 h-40 p-2'>
        <img src={img} alt="..." />
        <h5>{category}</h5>
        <h5>{title}</h5>
        <h5>{price}</h5>
        <h5>{id}</h5>
        <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default Card