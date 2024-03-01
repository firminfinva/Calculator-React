import { useState } from "react"
import Button from "./Button"

export default function Ofbuttons({value}){

    console.log(value[0])
    return (
    <>
      {value[0]=="7"? <div className="ofbuttons">
            {value.map((button) =>  <Button key={button} value={button} />)}
        
        </div>:
        <div className="extrabtn">
            {value.map((button) =>  <Button key={button} value={button} />)}
        
        </div>}
       
    </>
   )
}