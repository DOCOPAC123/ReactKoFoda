import React from "react";

class ClassCounter extends React.Component {

    constructor(){
        super();
        this.state = {
            counter : 0
        }
    }

    incrementCount=()=>{
        this.setState({
            counter : this.state.counter + 1
        })
    }

    render(){
        return(
            <div>
                <button onClick = {this.incrementCount}>Click {this.state.counter}</button>
            </div>
        )
    }
}

export default ClassCounter;