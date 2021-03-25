import React, {useState} from "react";

function HooksClassCounterFour() {
    const [elements, addElement] = useState([]);

    const addItem=()=>{
        addElement([...elements, {
            id : elements.length,
            value : Math.random()
        }])
    }

    return(
        <div>
            <button onClick={addItem}>Add Element</button>
            <ul>
                {elements.map((element)=>{
                    <li key = {element.id}>{element.value}</li>
                })}
            </ul>
        </div>
    )
}
export default HooksClassCounterFour;