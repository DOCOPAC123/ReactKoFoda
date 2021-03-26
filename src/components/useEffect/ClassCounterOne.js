import React from "react";
import ClassCounter from "../useState/ClassCounter";

class ClassCounterOne extends React.Component{

    constructor(){
        super();
        this.state = {
            counter : 0
        }
    }
    componentDidMount(){
        document.title = "Counter value is "+this.state.counter + " value";
    }

    componentDidUpdate(){
        document.title = "Counter value is "+this.state.counter + " value";
    }
    render(){
        return(
            <div>
                <button onClick = {()=>this.setState({counter : this.state.counter + 1})}>
                    Click Me
                </button>
            </div>
        )
    }
}

export default ClassCounterOne;