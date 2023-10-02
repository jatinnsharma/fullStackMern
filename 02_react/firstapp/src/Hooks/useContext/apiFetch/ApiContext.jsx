import React, { createContext, useEffect, useState } from 'react'
import Card from './Card';

const SendingData = createContext();

const ApiContext = () => {
    const [data , setData] = useState([]);
    
    useEffect(()=>{
        getData();
    },[])

  async  function getData(){
        const data = await fetch('https://fakestoreapi.com/products')
        const json = await data.json();
        setData(json)
    }
  return (
    <SendingData.Provider value={data}>
        <Card/>
    </SendingData.Provider>
  )
}

export default ApiContext;
export {SendingData};