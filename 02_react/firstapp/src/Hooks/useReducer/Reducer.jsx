import React from 'react'
import { useReducer } from 'react'

const initialState = {count:0}

function reducer(state,action){
    switch(action.type){
        case  'increment': {

            return {count: state.count+1}
        }
        case 'mul' :{
            return {count:state.count*2}
        }
        case 'div' :{
 
            return {count:state.count/2}
        }
        case 'sub' :{

            return {count:state.count-1}
        }
        default:
            return state;
    }
}

const Reducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>increment</button>
        <button onClick={()=>dispatch({type:'mul'})}>Mul</button>
        <button onClick={()=>dispatch({type:'sub'})}>sub</button>
        <button onClick={()=>dispatch({type:'div'})}>divide</button>
    </div>
  )
}

export default Reducer