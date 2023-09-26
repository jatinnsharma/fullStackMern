import React ,{useEffect, useState} from 'react'

import ProductCard from './ProductCard'
const ProductsList =  () => {
    const [productData,setProductData] = useState([]);

    // Button filter 
    const [productFliterData,setProductFilterData] = useState(productData)

    // logic 
    const filterProducts = (category)=>{
        if(category === 'all'){
            // It will show all the product
            setProductFilterData(productData);
        }else {
            // filter product by category
            const filtered = productData.filter((product)=>product.category === category);
            setProductFilterData(filtered)
        }

    }

    // easy search bar 
    const [searchTerm,setSearchTerm ] = useState("");

    // const [filteredProduct, setFilteredProduct] = useState(data)
    useEffect(()=>{
             fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then((completeData)=>{
                    setProductData(completeData);
                    // setProductFilterData(completeData);
                })
                .catch((err)=>console.log(err))
    })


    // hard search bar 
    // const  handerFliter =(value)=>{
    //     const result = productFliterData.filter(e=>e.title.toLowerCase().includes(value))
    //     setProductData(result)
    // }
  return (
        <>
        <div className="text-4xl m-10">Best of our products</div>

        <div className='flex justify-around'>
        <input className='w-2/6 ml-10 p-2 border-black' type="text" placeholder='Search here...' onChange={e=>setSearchTerm(e.target.value)}/>

        <div className='flex gap-4'>
        <button onClick={()=>{filterProducts('all')}} className='btn btn-danger'>All</button>
        <button onClick={()=>{filterProducts("men's clothing")}} className='btn btn-danger'>Men's</button>
        <button onClick={()=>{filterProducts("women's clothing")}} className='btn btn-danger'>Woman's</button>
        <button onClick={()=>{filterProducts('jewelery"')}} className='btn btn-danger'>Jewelery</button>
        <button onClick={()=>{filterProducts('electronics')}} className='btn btn-danger'>Electronics</button>
            </div> 
        </div>

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