import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
    <div className="bg-white fixed flex flex-wrap justify-center text-white place-items-center  bottom-12 inset-x-0 p-2 rounded-full items-center w-3/5 mx-80">
      <button onClick={()=>setColor('red')} className="bg-red-600 mx-2 rounded-full border-none px-4 py-1">Red</button>
      <button onClick={()=>setColor('blue')} className="bg-blue-500 mx-2 rounded-full border-none px-4 py-1">Blue</button>
      <button onClick={()=>setColor('green')} className="bg-green-600 mx-2 rounded-full border-none px-4 py-1">Green</button>
      <button onClick={()=>setColor('black')} className="bg-black  mx-2 rounded-full border-none px-4 py-1">Black</button>
      <button onClick={()=>setColor('pink')} className="bg-pink-400  mx-2 rounded-full border-none px-4 py-1">Pink</button>
      <button onClick={()=>setColor('orange')} className="bg-orange-500  mx-2 rounded-full border-none px-4 py-1">Orange</button>
      <button onClick={()=>setColor('purple')} className="bg-purple-500  mx-2 rounded-full border-none px-4 py-1">Purple</button>
      <button onClick={()=>setColor('yellow')} className="bg-yellow-500  mx-2 rounded-full border-none px-4 py-1">Yellow</button>
      <button onClick={()=>setColor('gray')} className="bg-gray-500  mx-2 rounded-full border-none px-4 py-1">Gray</button>
    </div>
    </div>
  )
}

export default App
