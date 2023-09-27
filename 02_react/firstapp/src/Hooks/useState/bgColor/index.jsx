import React, { useState } from 'react'

const BgColorChange = () => {
    const [bgColor, setBgColor] = useState('gray')
    const [text,setText] = useState('Click')
    const [textYellow,setTextYellow] = useState('Click')
    const [textBlack,setTextBlack] = useState('Click')
    const [img ,setImg ] = useState('https://images.unsplash.com/photo-1695624765339-4f2f018e2f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60')

    const [textImg1,setTextImg1] = useState('Click ME')
    const [textImg2,setTextImg2] = useState('Click ME')
    
    const buttonRedColor = () => {
       
        setBgColor('red')
        setText('Red')
    }
    const buttonYellowColor = () =>{
        
        setBgColor('yellow')
        setTextYellow('yellow')
    }
    const buttonBlackColor = () =>{
        
        setBgColor('black')
        setTextBlack('black')        
    }


    const changeImg1 = () => {
        setTextImg1('Very Good')
        setImg('https://images.unsplash.com/photo-1682685796775-020fd5dcd7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60')
    }
    const changeImg2 = () => {
        setTextImg2('very Good')
        setImg('https://images.unsplash.com/photo-1692936451402-8ac91d1b71a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60')
    }

  return (
    <>
    
    <div style={{backgroundColor:bgColor,height:'20vh'}}
    >
        <button onClick={buttonRedColor}>{text}</button>
        <button onClick={buttonYellowColor}>{textYellow}</button>
        <button onClick={buttonBlackColor}>{textBlack}</button>
    </div>

    <div >
        <img src={img} alt="..." />
        <button onClick={changeImg1}>{textImg1}</button>
        <button onClick={changeImg2}>{textImg2}</button>
    </div>
    </>
  )
}

export default BgColorChange