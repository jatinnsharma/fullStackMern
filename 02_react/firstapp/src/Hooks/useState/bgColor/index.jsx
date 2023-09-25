import React, { useState } from 'react'

const BgColorChange = () => {
    const [bgColor, setBgColor] = useState('gray')
    const [text,setText] = useState('Click')
    const [textYellow,setTextYellow] = useState('Click')
    const [textBlack,setTextBlack] = useState('Click')
    

    
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
  return (
    <>
    
        <button onClick={buttonRedColor}>{text}</button>
        <button onClick={buttonYellowColor}>{textYellow}</button>
        <button onClick={buttonBlackColor}>{textBlack}</button>
    <div style={{backgroundColor:bgColor,height:'100vh'}}
    >
    </div>
    </>
  )
}

export default BgColorChange