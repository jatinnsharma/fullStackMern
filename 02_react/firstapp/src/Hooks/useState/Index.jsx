import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0)

    const Incerment = () =>{
        setCount(count +1)
    }
    const Decrement = () =>{
        setCount(count -1)
    }
    const multiNum = () =>{
        setCount(count * 2)
    }
    const divNum = () =>{
        setCount(count / 2)
    }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={Incerment}>+</button>
    <button onClick={Decrement}>-</button>
    <button onClick={multiNum}>* by 2</button>
    <button onClick={divNum}>/  by 2 </button>
    </>


  )
}

export default UseState