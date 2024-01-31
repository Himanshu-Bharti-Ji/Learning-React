
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  
  let [counter, setCounter] = useState(0)

  // let counter = 0

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
      console.log("Clicked",counter)
    }
    else{
      console.log("Counter is more than 20")
    }
  }

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
      console.log("Clicked",counter)
    }
    else{
      console.log("Counter is less than 0")
    }
  }

  return (
    <>
      <h1>My Counter </h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
