import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let count=5
const Addvalue = ()=>{
  count++
  console.log("value added",Math.random());
  document.getElementById("counter").innerText=`Counter value: ${count}`
}
 const Subvalue=()=>{
  count--
  document.getElementById("counter").innerText=`Counter value: ${count}`
 }

  return (
    <>
  <h1>Chai aur React</h1>
  <h2 id="counter">Counter value: {count}</h2>
  <button onClick={Addvalue}>Add value</button>
  <button onClick={Subvalue}>Remove value</button>
    </>
  )
}

export default App
