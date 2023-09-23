import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../data/data';
const ProductDetails = () => {
    const {id } = useParams();
    const navigation = useNavigate();
    const [product,setProduct] = useState([])
    
    useEffect(() => {
         data.find((item) => {
          if (item.id === id) {
            return setProduct(item);
          }
        });
      }, [id]);

  return (
    
    <div style={{height:'100vh',width:'80vw',margin:'auto'}}className='d-flex justify-content-center align-items-center '>
        {/* id,title,img,category,desc,price */}
        {/* <h1>{product.id}</h1> */}
        <div >
            <img src={product.img} alt="product-img" />
        </div>
        <div className='flex-grow-1 ms-3'>
            <div className='d-flex '>

            <h4>{product.title} - </h4> 
            <h4>{product.category}</h4>
            </div>
            <p>{product.desc}</p>
            <h5>Price - {product.price}</h5>
            <div className='d-flex gap-5'>
            <button className='btn btn-danger'> Add to cart</button>
            <button onClick={()=>navigation('/')} className='btn btn-danger'> Go to Home</button>
            </div>
        </div>
    </div>

    

  )
}

export default ProductDetails