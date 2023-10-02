import React, { useState } from 'react'



const Forms = () => {
    const [name,setName]  = useState('Jatin')
    const [email,setEmail]  = useState('jatinsharma2231@gmail.com')
    const [phone,setPhone]  = useState('9050603853')
console.log(name)
    const ChangeHandler = (e) =>{
        let inputName = e.target.name;
        console.log(inputName)
        let inputValue = e.target.value;
        if(inputName === "name"){
            setName(inputValue)
        }else if(inputName === "email"){
            setEmail(inputValue);
        }else if(inputName === "phone"){
            setPhone(inputValue);
        }
    }
    
    const formSubmitHandler = (e) =>{
        e.preventDefault();
        // let data = {
        //     name : name,
        //     email:email,
        //     phone:phone,
        // }
        // if in obj key and value are same you can write like this 
        let data = {name,email,phone,}
        console.log('data',data)
    }
    return (
        <>
        <div>User Validation</div>
    <form action='#' onSubmit={formSubmitHandler}>
        <div>
            <label >Name</label>
            <input type="text" name='name' placeholder="Enter your Name" value={name} onChange={ChangeHandler} />
        </div>
        <div>
            <label >Email</label>
            <input type="email" name='email' placeholder="Enter your email" value={email} onChange={ChangeHandler} />
        </div>
        <div>
            <label >Phone</label>
            <input type="number" name='phone' placeholder="Enter your Phone" value={phone} onChange={ChangeHandler} />
        </div>
        <input type="submit" value="save" />
    </form>
        </>
  )
}

export default Forms