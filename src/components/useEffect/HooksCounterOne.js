import React, { useState, useEffect } from "react";

function HooksCounterOne(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=>{
        console.log("Title updated");
        document.title = "Counter value is "+ count + " value";
    },[count])

    return(
        <div>
            <input type="text" value = {name} onChange = {e=>setName(e.target.value)}></input>
            <button onClick = {()=> setCount((count)=>count+1)}>Click me</button>
        </div>
    )

}
export default HooksCounterOne;