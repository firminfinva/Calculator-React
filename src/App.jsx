import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="glass"></div>
      <Main/>
      <div className="main2"></div>
      {/* <div class="back" id="back-close">
        <div class="brand">firmin</div>
    </div> */}
    </>
  )
}

export default App
