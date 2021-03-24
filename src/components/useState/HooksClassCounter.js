import React, {useState} from "react";

function HooksClassCounter() {
    const[counter, setCounter] = useState(0);
    return(
        <div>
            <button onClick = {()=> setCounter(counter+1)}>
                Count {counter}
            </button>
        </div>
    )
}

export default HooksClassCounter;