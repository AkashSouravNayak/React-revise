import { useState } from 'react'



function App() {
  let [sum,setSum] = useState(0);

  const addValue = () =>{
    if(sum < 20){
    sum = sum +1;
    }
    setSum(sum)
    }
    const subtractValue = () => {
    if(sum > 0){
      sum = sum-1;
    }
    setSum(sum);
    }

  return (
    <>
    <button onClick={addValue}>Add</button>
    <button onClick={subtractValue}>Subtract</button>
    <h1>Results: {sum}</h1>
    </>
  )
}

export default App
