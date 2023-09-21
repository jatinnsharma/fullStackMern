import React, { useState } from 'react'
import {data} from '../data/data'
import Card from './Card'

const Cards = () => {
  const [searchTerm,setSearchTerm] = useState("")
  return (
    <div>
        <h1>Food App</h1>
        <input style={{width:"40%",height:"40px"}} type='text' placeholder='Serach here ...' onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {  
            data.filter((val)=>{
              if(searchTerm === " "){
                return val;
              }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            }).map((items)=>{
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