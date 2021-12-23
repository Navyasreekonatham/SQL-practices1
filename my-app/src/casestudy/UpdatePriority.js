import axios from "axios";
import React, { Component } from "react";

class UpdatePriority extends Component {
    constructor(props){
        super(props)
        this.state = {
            task_ID:'',
            priority:'',
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }
    changeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.get("http://localhost:8080/Priority/"+this.state.task_ID+"/Priority/"+this.state.priority,this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {task_ID,priority} = this.state
        return (
            <div style={{"color":"grey","textAlign":"center"}}>
            <form  onSubmit={this.submitHandler}>
                <div>
                    task_ID:
                    <input type="number" name="task_ID" value={task_ID} onChange={this.changeHandler} placeholder="task_ID" required/>
                </div>
                        
                <div>
                    priority :
                        <select  name="priority" value={priority} onChange={this.changeHandler} >
                                
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                        </select>
                </div>
                 <button type="submit">Submit</button>

            </form>
        </div>
            
        )
    }
}

export default UpdatePriority;