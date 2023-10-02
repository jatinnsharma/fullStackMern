import React, { useState } from 'react'

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [message , setMessage] = useState('');
    
    const checkUserDetails ={
        username:"user123",
        password:'password123',
    }
    
    const handleUserLogin = () =>{
        if(username === checkUserDetails.username && password === checkUserDetails.password ) {
            return setMessage('Welcome bro!!!')
        }else{
            return setMessage('Oops !! you enter wrong password')
        }
    }

  return (
    <div>
        <h1>Login</h1>
        <input type='username' placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)}/>
        <input type='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleUserLogin}>Submit</button>
        <div>{message}</div>
    </div>
  )
}

export default Login