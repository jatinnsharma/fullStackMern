import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart,increaseQuantity,decreaseQuantity } from './features/reducer';
const CartPage = () => {
    const dispatch = useDispatch();
    

    const data = useSelector((state) => state.cart.items)
    const {title,category,price,img}  = data

    const removeFromCart = (product) =>{
        dispatch(removeFromCart(product))
    }
    
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product));
  };


  return (
    <div>
        <div>Cart page: </div>
        {
            data.map((items)=>{
                return (
                    <div className='w-44 h-40 p-2'>
        <img src={items.img} alt="..." />
        <h5>{items.category}</h5>
        <h5>{items.title}</h5>
        <h5>{items.price}</h5>
        <h5>{items.id}</h5>
        <button onClick={(items)=>removeFromCart(items)}>Remove</button>
    </div>
                )
            })
        }
        <button onClick={handleDecreaseQuantity}>-</button>
          {data.quantity}
          <button onClick={handleIncreaseQuantity}>+</button>
        {/* <button onClick={handleRemove}>Remove</button>
        <button onClick={handleRemove}>Remove</button> */}
    </div>
  )
}

export default CartPage