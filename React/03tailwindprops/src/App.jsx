import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App(props) {
  console.log(props);
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-800 rounded-xl mb-4 p-2'>Tailwind Test</h1>
      <Card username="chaiAurCode" btnText="Click Me" />

    </>
  )
}

export default App
