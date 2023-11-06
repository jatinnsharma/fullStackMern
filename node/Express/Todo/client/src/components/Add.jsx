import React, { useState } from 'react'

const Add = () => {
  const [newTodo,setNewTodo] = useState('')

  return (
    <form action="http://localhost:8080/data" method="post">
        <input type="text" name="newTodo" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder='Enter new todo'/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default Add