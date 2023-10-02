import React from 'react'
import ComponentsA from './ComponentsA'
import { createContext } from 'react'

const FirstName = createContext();
const LastName = createContext();

const Context = () => {
  return (
    <FirstName.Provider value={'Jatin'}>
        <LastName.Provider value={'Sharma'}>
            <ComponentsA />
        </LastName.Provider>

    </FirstName.Provider>
  )
}

export default Context
export {FirstName,LastName};