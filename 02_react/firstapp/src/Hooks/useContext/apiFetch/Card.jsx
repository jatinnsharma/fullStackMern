import React, { useContext } from 'react'
import { SendingData } from './ApiContext'
const Card = () => {
    const rendingData = useContext(SendingData)
    console.log(rendingData)
  return (
    <div>
        {
            rendingData.map(({id,title,description,image,rating,price})=>{
                return(
                    <>
                    
                    <h5>{id}</h5><h5>{title}</h5>
                    </>
                )
            })
        }
    </div>
  )
}

export default Card