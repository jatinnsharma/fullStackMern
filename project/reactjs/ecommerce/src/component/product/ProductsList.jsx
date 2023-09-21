import React ,{useEffect, useState} from 'react'

import ProductCard from './ProductCard'
const ProductsList =  () => {
    const [productData,setProductData] = useState([]);
    // const [productFliterData,setProductFilterData] = useState([])

    // easy search bar 
    const [searchTerm,setSearchTerm ] = useState("");

    useEffect(()=>{
             fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then((completeData)=>{
                    setProductData(completeData);
                    // setProductFilterData(completeData);
                })
                .catch((err)=>console.log(err))
    })

    // const  handerFliter =(value)=>{
    //     const result = productFliterData.filter(e=>e.title.toLowerCase().includes(value))
    //     setProductData(result)
    // }
  return (
        <>
        <div className="text-4xl m-10">Best of our products</div>
        <input className='w-2/6 ml-10 p-2 border-black' type="text" placeholder='Search here...' onChange={e=>setSearchTerm(e.target.value)}/>
         <div className="grid grid-cols-4">
        {
            productData.filter((val)=>{
                if(searchTerm === " "){
                    return val;
                }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            }).map((item,index)=>{
                return <ProductCard data={item} key={index}/>
            })
        }
    </div>
        </>
  )
}

export default ProductsList