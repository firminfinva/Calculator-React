import {  useState } from 'react'

import './App.css'
import Main from './components/Main'
import { MyProvider } from './context/MyContext'


function App() {


  return (
    <MyProvider>
        <div className="glass"></div>
        <Main/>
        <div className="main2"></div>
      {/* <div class="back" id="back-close">
        <div class="brand">firmin</div>
    </div> */}
    </MyProvider>
  )
}

export default App
