import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'


function App() {
  const [count, setCount] = useState(0)
  return ( 
    <>
    <Navbar />
    <img src="/horse-horses.gif"></img>
      <h1>hello</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          i figured out how to add the horse <br></br>
         {count}
        </button>

        <p> {/** Essentially <p> is paragraph */}
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
