import React from 'react'
import { useContext } from 'react'
import { FirstName,LastName } from './Context';



const ComponentsB = () => {
    const FName = useContext(FirstName)
    const LName = useContext(LastName);
  return (
    <div>
        <h1>My name is {FName} {LName} </h1>
    </div>
  )
}

export default ComponentsB