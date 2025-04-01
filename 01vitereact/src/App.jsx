
import Chai from "./chai"
//! How variable and js will inject into this 
//For variables we use {...} curly braces and its result or expression called evaluated expression

function App() {
  const username = "chai aur code"
  return (
    <>
     <Chai/>
     <h1>Hey {username}</h1>
     <p>test para </p>
    </>
 
 )
}

export default App;
