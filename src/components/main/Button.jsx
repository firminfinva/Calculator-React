import { useContext } from "react"
import MyContext from "../../context/MyContext"

export default function Button({value}){
    const {screenInput, setScreenInput} = useContext(MyContext)
    const handleClick = (e)=>{
        const input = screenInput
        setScreenInput(input +e.target.innerText)
    }
    return(<button onClick={handleClick}>{value}</button>)
}