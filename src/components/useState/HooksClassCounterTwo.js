import React, {useState} from "react";

function HooksClassCounterTwo(){
    const initialValue = 0;
    const[counter, setCounter] = useState(initialValue);

    return(
        <div>
            Count {counter}
            <button onClick={()=>setCounter(initialValue)}>Reset</button>
            <button 
                onClick = {()=>setCounter(prevCount => prevCount + 1)}
            >Increment Counter</button>
            <button
                onClick = {()=>setCounter(prevCount => prevCount - 1)}
            >Decrement Counter</button>

            <button
                onClick = {()=>setCounter(prevCount => prevCount + 5)}
            >Increment Counter by 5</button>
        </div>
    )
}

export default HooksClassCounterTwo;