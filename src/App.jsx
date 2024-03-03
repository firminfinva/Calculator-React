import {  useState } from 'react'

import './App.css'
import Main from './components/Main'
import { MyProvider } from './context/MyContext'


function App() {
  const [screenId, setScreenId] = useState("back-close")
  const handleTurnCover = () => {
    if(screenId=="back-close") setScreenId("back-open")
    else setScreenId("back-close")
  }
  return (
    <MyProvider>
        <div className="glass"></div>
        <Main/>
        <div className="main2"></div>
      <div class="back" onClick={handleTurnCover} id={screenId}>
        <div class="brand">firmin</div>
    </div>
    </MyProvider>
  )
}

export default App
