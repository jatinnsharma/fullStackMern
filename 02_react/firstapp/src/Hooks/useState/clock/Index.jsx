import React, { useState } from 'react'

const Clock = () => {
    let time = new Date().toLocaleTimeString()
    let [clock,setClock] = useState(time)
    
    let ChangeTime = ( ) =>{
        time = new Date().toLocaleTimeString(); 
        setClock(time)
    }

    setInterval(ChangeTime,1000)

  return (
    <div style={{display:'flex',alignItems:'center' ,justifyContent:'center',flexDirection:'column',height:"100vh",backgroundColor:'black',color:'white'}}>
        <h1>Today's Time </h1>
      <h2>{clock}</h2>

    </div>
  )
}

export default Clock