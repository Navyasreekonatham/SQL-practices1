import axios from "axios";
import React, { Component } from "react";

class UpdateBookmark extends Component {
    constructor(props){
        super(props)
        this.state = {
            task_ID:'',
            isBookmarked:'',
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
        axios.get("http://localhost:8080/bookmark/"+this.state.task_ID+"/isBookmarked/"+this.state.isBookmarked,this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {task_ID,isBookmarked} = this.state
        return (
            <div style={{"backgroundColor":"grey","color":"black","textAlign":"center"}}>
                <form  onSubmit={this.submitHandler}>
                <div>
                    task_ID:
                    <input type="number" name="task_ID" value={task_ID} onChange={this.changeHandler} placeholder="task_ID" required/>
                </div><br/><br/>
                        
                <div>
                    isBookmarked :
                        <select  name="isBookmarked" value={isBookmarked} onChange={this.changeHandler} >
                                <option value="select">select</option>
                                <option value="true">true</option>
                                <option value="false">false</option>
                        </select>
                </div><br/><br/>
                 <button type="submit">Submit</button>

            </form>
        </div>
            
        )
    }
}

export default UpdateBookmark;