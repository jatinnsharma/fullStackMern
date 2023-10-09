import React from 'react'
import App from './App'
import { CartContext, CartProvider } from './cart-context'
import { cartLogger } from './cart-context'

const ContextApiIndex = () => {
  return (
    <CartProvider>
        <App/>
    </CartProvider>


  )
}

export default ContextApiIndex