import axios from "axios";
import React, { Component } from "react";

class UpdateNotes extends Component {
    constructor(props){
        super(props)
        this.state = {
            task_ID:'',
            notes:'',
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
        axios.get("http://localhost:8080/notes/"+this.state.task_ID+"/Notes/"+this.state.notes,this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {task_ID,notes} = this.state
        return (
            <div style={{"color":"grey","textAlign":"center"}}>
            <form  onSubmit={this.submitHandler}>
                <div>
                    task_ID:
                    <input type="number" name="task_ID" value={task_ID} onChange={this.changeHandler} placeholder="task_ID" required/>
                </div>
                        
                <div>
                    notes :
                        <input type="text"  name="notes" value={notes} onChange={this.changeHandler} />
                                
                                
                        
                </div>
                 <button type="submit">Submit</button>

            </form>
        </div>
            
        )
    }
}

export default UpdateNotes;