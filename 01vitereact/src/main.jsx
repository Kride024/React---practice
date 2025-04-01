import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div> 
        <h1>Hey I Custom !!</h1>
        </div>
    )
}
const reactElement = {
    type:'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'click me to visit google'
}

const anotherElement=(
 <a href="https://google.com" target='_blank'>visit google</a>
)
    // jsx function always return inside parenthesis


ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp/> // This is type of function call
    anotherElement
    // MyApp()
)
