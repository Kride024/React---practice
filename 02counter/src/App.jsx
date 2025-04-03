// import React , { useState } from 'react'
// import  { useState,useEffect } from 'react'

import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
// let count=5
// you can change let to const and yet make changes
let [count, hiteshCounter] = useState(15)
const Addvalue = ()=>{
  //! Operation perform in bulk (fibres) so multiple same operation consider one
  if(count >=20)hiteshCounter(20)
  else {
// hiteshCounter(count + 1)
    hiteshCounter(count=>count+1)
    hiteshCounter(count=>count+1)
    
  }
}
 const Subvalue=()=>{
  if(count==0){
hiteshCounter(0)
  }
  else hiteshCounter(count-1)

 }

  return (
    <>
  <h1>Chai aur React</h1>
  <h2 id="counter">Counter value: {count}</h2>
  <button onClick={Addvalue}>Add value {count}</button>
  <button onClick={Subvalue}>Remove value {count}</button>
    </>
  )
}

export default App
