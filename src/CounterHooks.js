import React,{useState, useContext} from "react";
import { ThemeContext } from "./App";

// functional component counter-hooks
export default function CounterHooks({initialCount}){
    console.log("Render Counter Hooks")
    
    const [count, setCount] = useState(initialCount)
    let style = useContext(ThemeContext)
    
    return(
        <div>
            <button className ='btn' style = {style} onClick={()=> setCount(prevCount => prevCount -1)}>-</button>
                <span>{count}</span>
            <button className = 'btn' style = {style} onClick={()=> setCount(prevCount=> prevCount +1)}>+</button>
        </div>   
        )
    }
    
    
    
    
