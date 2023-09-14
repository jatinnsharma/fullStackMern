import React ,{useEffect, useState} from 'react'

import ProductCard from './ProductCard'
const ProductsList =  () => {
    const [productData,setProductData] = useState([]);
    const [productFliterData,setProductFilterData] = useState([])
    useEffect(()=>{
             fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then((completeData)=>{
                    setProductData(completeData);
                    setProductFilterData(completeData);
                })
                .catch((err)=>console.log(err))
    })

    const  handerFliter =(value)=>{
        const result = productFliterData.filter(e=>e.title.toLowerCase().includes(value))
        setProductData(result)
    }
  return (
        <>
        <div className="text-4xl m-10">Best of our products</div>
        <input type="text" placeholder='Search here...' onChange={e=>handerFliter(e.target.value)}/>
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