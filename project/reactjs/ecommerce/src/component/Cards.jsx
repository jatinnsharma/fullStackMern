import React from 'react'

const Cards = () => {
  return (
<>
{

  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then((products)=>{
    products.map(product=>(
        <div className="card">
    <img src={product.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{product.image}</h5>
      <p className="card-text">{product.description}</p>
      <p className="btn btn-primary">Shop Now</p>
    </div>
  </div>
    )
    )
  })
}

    
</>


  )
}

export default Cards