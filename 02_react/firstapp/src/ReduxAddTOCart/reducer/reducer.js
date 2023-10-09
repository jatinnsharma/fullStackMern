const initialState ={
    cart:[]
}

const cartReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'addToCart' : 
        return {
           ...state,
           cart:[...state,action.product]
        }
        case 'removeToCart' :
            return{
                ...state,
                cart:state.cart.filter(item=>item.id!==action.productID)
            }
        case 'increaseQuantity':{
            return{
                ...state,
                cart:state.cart.map((item)=>{
                    if(item.id === action.productID){
                        return {...item,quantity:item.quantity+1}
                    }
                    return item
                })
            }
        }

        case 'decreaseQuantity':{
            return{
                ...state,
                cart:state.cart.map((item)=>{
                    if(item.id===action.productID){
                        return {...item,quantity:item.quantity-1}
                    }
                    return item;
                })
            }
        }

        case 'DISCARD_CART':
      return {
        ...state,
        cart: [],
      };
        default:
            return state
    }
}

export default cartReducer