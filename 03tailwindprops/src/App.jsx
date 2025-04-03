import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 
  let arr=[1,2,3,4,5]
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
   <Card username="chai aur code" Num="4" />
   <Card username={arr} Num="5"/>
  </>
  )
}

export default App
