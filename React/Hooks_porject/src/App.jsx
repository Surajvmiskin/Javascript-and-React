import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  1
  // let counter = 5
  const addValue = () => {
    // counter += 1
    if (counter < 20) {
      setCounter(counter + 1)
    }

    // console.log("Clicked", counter);
  }
  const removeValue = () => {
    if (counter <= 0) {
    } else { setCounter(counter - 1) }
  }
  return (
    <>
      <h1>Chai or code</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}>Add Value</button>
      <br />
      <button
        onClick={removeValue}>Remove Value</button>
      <p></p>
    </>
  )
}

export default App
