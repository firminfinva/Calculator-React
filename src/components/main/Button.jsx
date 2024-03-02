import { useContext } from "react"
import MyContext from "../../context/MyContext"
import myeval from "../../context/thecalc"

export default function Button({value}){
    const {screenInput, setScreenInput, answer , setAnswer} = useContext(MyContext)
    function whenclick(str,entry){
        const arr = ["+", "-", "%", "x","*","/","mod"]
        if(((arr.includes(entry)) && (arr.includes(str[str.length-1])))||(str.length==0)){
  
            str = str.slice(0, str.length-1)
            if(entry=="%"){
                if((str.length==1) && (arr.includes(str[str.length-1]))||(str.length==0)){
                    return ""
                }
                else{
                    return str += "/"
                }
        
            }else if(entry=="x"){
                if(str.length==0) str += "1"+ "*"
                else return str += "*"
            }else if(entry=="mod"){
                if((str.length==1) && (arr.includes(str[str.length-1]))||(str.length==0)){
                    setAnswer("you have to put a number before mod")
                    return ""
                    
                } 
                else str +="%"
            }else if(entry=="**"){
                if((str.length==1) && (arr.includes(str[str.length-1]))||(str.length==0)){
                    setAnswer("you have to put a number before **")
                    
                } 
                else str +="**"
            }
            else{
                if(entry=="E") str = (Math.E).toString()
                else str += entry
            }
           
        }else if(entry=="mod"){
            str += "%"
        }else if(entry=="%"){
            str += "/"
        }else if(entry=="x"){
            str += "*"
        }else if(entry=="E"){
            if(+(str[str.length-1])){
                console.log(str[str.length-1])
                str += "*"+(Math.E).toString()
            }else if(str.length==0){
                str = (Math.E).toString()
            }else  if(entry=="E"){
                str += (Math.E).toString()
            } 
          
        }
        else if(entry=="AC"){
            str =""
        }else if(entry=="DEL"){
            if(str.length>0){
                str = str.slice(0, str.length-1)
            }else{
                str = ""
            }
           
        }else if(entry=="ans"){
            str = answer
        }else if(entry=="="){
            setAnswer(myeval(str))
            if(answer=="Check your expression please"){
                setAnswer(myeval(str))

            }else{
                setAnswer(myeval(str))
            } 
        }else{
            if((entry!="E")||(arr.includes(entry))) str += entry
        }
    
        return str
    }
    const handleClick = (e)=>{
        const input = screenInput
        setScreenInput(whenclick(input, e.target.innerText))
    }
    return(<button onClick={handleClick}>{value}</button>)
}