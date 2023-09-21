import React from 'react'
import {data} from '../data/data'
import Card from './Card'

const Cards = () => {
  return (
    <div>
        <h1>Food App</h1>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {  
            data.map((items)=>{
                return (
                    <Card data={items}/>
                )
            })
        }
        </div>
    </div>
  )
}
  
export default Cards