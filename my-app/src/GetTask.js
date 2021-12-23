import React,{Component} from "react";
import axios from "axios";

class GetTask extends Component{
    constructor () {
        super()
        this.state = {
            task_ID:''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (){
        axios.get('https://localhost:8080/list')
        .then(response=>this.setState({task_ID: response.data[0].task_ID}))
    }
    render (){
        return(
            <div>
                <button className='button' onClick={this.handleClick}>Click</button>
                <p>{this.state.task_ID}</p>
            </div>
        )
    }
}

export default GetTask;