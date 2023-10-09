import React, { useContext } from 'react'
import { CartContext, CartLogger } from './cart-context'


export function ProducListing() {
  return  ['1','2','3','4'].map((items)=><h2>Product {items}</h2>)
}
export function Card () {
    const {items,logger} = useContext(CartContext)
    return <h1 onClick={logger}>Items in cart {items}</h1>

}

const App = () => {
  return (
    <div>
    <div>Ecommerce</div> 
    <Card/>
    <ProducListing/>
    </div>

  )
}

export default App