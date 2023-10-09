import { createContext } from "react";
export const CartContext = createContext({items:4});


export const CartProvider = ({children}) =>{
    return (
    <CartContext.Provider value={{item:0,logger:()=>console.log('logging...')}}>
        {children}
    </CartContext.Provider>
    )
}