import React from 'react'
import { increment,decrement } from './action/Action'
import { useSelector,useDispatch } from 'react-redux'
const MainComponent = () => {

    const myState = useSelector((state)=>state.reducer)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{myState}</h1>
        <button onClick={()=>dispatch(increment())} >Increment </button>
        <button onClick={()=>dispatch(decrement())} >decrement </button>
    </div>
  )
}

export default MainComponent