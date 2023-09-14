import React ,{useEffect, useState} from 'react'

import ProductCard from './ProductCard'
const ProductsList =  () => {
    const [productData,setProductData] = useState([]);
     
    useEffect(()=>{
             fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then((completeData)=>{setProductData(completeData)})
                .catch((err)=>console.log(err))
    })
  return (
        <>
        <div className="text-4xl m-10">Best of our products</div>
         <div className="grid grid-cols-4">
        {
            productData.map((item,index)=>{
                return <ProductCard data={item} key={index}/>
            })
        }
    </div>
        </>
  )
}

export default ProductsList