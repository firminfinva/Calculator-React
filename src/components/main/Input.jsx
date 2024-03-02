import { useContext } from "react"
import MyContext from "../../context/MyContext"

export default function Input(){
    const {screenInput, answer} = useContext(MyContext)
    return (<div className="input">
    <div className="input-text">{screenInput}</div>
    <div className="answer">{answer}</div>
</div>)
}