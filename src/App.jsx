import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FrontEnd from './components/Frontend/FrontEnd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FrontEnd/>
    </>
  )
}

export default App
