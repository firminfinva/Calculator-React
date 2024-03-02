import { createContext, useState, useEffect } from 'react'
const MyContext = createContext()



export default MyContext;


export const MyProvider = ({children}) => {
    const [screenInput, setScreenInput] = useState("")
    const [answer, setAnswer] = useState("")

    let contextData = {
        screenInput:screenInput,
        setScreenInput:setScreenInput,
        answer:answer, 
        setAnswer:setAnswer,
    }


    return(
        <MyContext.Provider value={contextData} >
            {children}
        </MyContext.Provider>
    )
}