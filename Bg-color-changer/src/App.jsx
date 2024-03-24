import { useState } from 'react'

import './App.css'

const colorList = ['red','green','blue','black','brown','pink','orange','purple'];


function App() {
 const [bgColor,setBgColor] = useState('white');

  return (
    <div className='container'  style={{backgroundColor:bgColor}}>
        <div className='floating-container'>
            {colorList.map(color=>
              <button key={color} className='color-button' style={{backgroundColor:color}} onClick={()=>setBgColor(color)}>{color}</button>
            )}
        </div>
    </div>
  )
}

export default App
