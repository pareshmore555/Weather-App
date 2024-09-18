import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import File1 from './File1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <File1/>
    </>
  )
}

export default App
