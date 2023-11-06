import React, { useEffect, useState } from 'react'
import axios from "axios"

const TodoList = () => {
    const [data,setData] = useState([]);
    const getData= async ()=>{
        const data = await axios('http://localhost:8080/getData').catch(error => console.error(error));
        setData(data.data)
    }
   useEffect(()=>{
    getData()
   },[])
  return (
    <div>
        <ul>
        <li>{
        data.map((task)=>{
            return(
                <li>{task.task}</li>
            )
        })
        }</li>
        </ul>
    </div>
  )
}

export default TodoList