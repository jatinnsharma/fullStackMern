export const addToCart = (product) =>{
    return {
        type:'addToCart',
        product
    }
}

export const removeToCart = (productID) =>{
    return {
        type:'removeTocart',
        productID
    }
}

export const increaseQuantity = (productID) =>{
    return{

        type: 'INCREASE_QUANTITY',
        productID
    }       
}

export const decreaseQuantity = (productID) =>{
    return{
        type:'DECREASE_QUANTITY',
        productID
    }
}