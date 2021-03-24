import React, {useState} from "react";

function HooksClassCounterThree() {
    const[name, updateName] = useState({firstName : '', lastName : ''})

    return(
        <div>
            <input 
                type='text'
                value = {name.firstName}
                onChange = {(e)=> updateName({ ...name,
                    firstName : e.target.value
                })}
                />
            <input
                type='text'
                value = {name.lastName}
                onChange = {e=>updateName({ ...name, 
                    lastName : e.target.value
                })}
             />

            <h2>Your First Name is - {name.firstName}</h2>
            <h2>Your Second Name is - {name.lastName}</h2>
        </div>
    )
} 

export default HooksClassCounterThree;