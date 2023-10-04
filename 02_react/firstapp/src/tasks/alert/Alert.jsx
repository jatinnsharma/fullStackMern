import React, {  useState } from 'react'

const Alert = () => {
    const [changeData,setChangeData] = useState('')
   
    function handleFunction () {
        alert(changeData)
    }
  return (
    <div>
        <input type="text" placeholder='Enter something here...' onChange={(e)=>{setChangeData(e.target.value)}} />
        <button onClick={handleFunction} >Show Data</button>
        
    </div>
  )
}

export default Alert