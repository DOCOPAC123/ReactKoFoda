import React, {useState, useContext} from "react";
import {UserContext, ProjectContext} from "../../App"

function HooksClassCounterThree() {
    const[name, updateName] = useState({firstName : '', lastName : ''})
    const user = useContext(UserContext);
    const project = useContext(ProjectContext);
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
            <h2>User Name is - {user}</h2>
            <h2>Project Name is - {project}</h2>
        </div>
    )
} 

export default HooksClassCounterThree;