import React,{Component} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';

class SearchTask extends Component{
    constructor (){
    super()
    this.state={
       task:'',
        task_ID:''

    }
    
    this.changeHandler=this.changeHandler.bind(this);
    this.submitHandler=this.submitHandler.bind(this);

}   
changeHandler(e){
    this.setState({[e.target.name]: e.target.value})
}

submitHandler (e){
    e.preventDefault()
    console.log(this.state)
  
    axios.get('http://localhost:8080/search/'+this.state.task_ID)
    .then(response=>this.setState({task:response.data})
        
    )
    .catch(error=>{
        console.log(error)
    })
  
}

render(){
    const{task_ID} = this.state
    return(
        <div>
        <form onSubmit={this.submitHandler}>
            <table>
                
                 

                    <div class="form-group">
                  <label for="name">TaskID</label>
                  <input type="text"class ="form-control" name="task_ID" value={task_ID} onChange={this.changeHandler} />
                  </div>
                  
                 
                  <Button variant="primary">SUBMIT</Button>
                  <div>
                      <ul>
                      <li>TaskID:{this.state.task.task_ID}</li>
                       <li>Owner_ID:{this.state.task.owner_ID}</li>
                       <li>creator_ID:{this.state.task.creator_ID}</li>
                       <li>notes:{this.state.task.notes}</li>
                       <li>isBookmarked:{this.state.task.isBookmarked}</li>
                       <li>created_On:{this.state.task.created_On}</li>
                       <li>status_Changed_On:{this.state.task.status_Changed_On}</li>
                       <li>name:{this.state.task.name}</li>
                       <li>description:{this.state.task.description}</li>
                       <li>status:{this.state.task.status}</li>
                       <li>priority:{this.state.task.priority}</li>
                      </ul>
                  </div>
                  
                  </table>
                  </form>
                  </div>
                 
                  

    )
}


}
export default SearchTask;