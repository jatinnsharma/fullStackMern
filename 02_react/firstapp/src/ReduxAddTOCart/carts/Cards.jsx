import { data } from "../../data/data";
import React from 'react'
import Card from "./Card";

const Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
        {
            data.map((items)=>{
                return(
                    <Card data={items} key={items.id}/>
                )
            })
        }
    </div>
  )
}

export default Cards