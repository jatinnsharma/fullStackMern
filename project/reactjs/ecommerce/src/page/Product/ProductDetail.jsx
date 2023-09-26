import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';

const ProductDetail = () => {
  const  navigate  = useNavigate();
  const {id} = useParams();
  const [post , setPost] = useState({});

  useEffect(()=>{
    const fetch = async () => {
      try {
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setPost(data)
      }catch(err){
        console.log(err)
      }
    };
    fetch();
  },[])
  return (
    <div>
      <h1>{post.title}</h1>
      <button onClick={()=>navigate('/')}>Go Back</button>
    </div>
  )
}

export default ProductDetail