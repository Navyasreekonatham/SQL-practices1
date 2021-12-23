import React,{Component} from 'react';
import axios from 'axios';



class GetTaskData extends Component{
constructor(){
super()
this.state={
tasks:[]
}
this.handleClick = this.handleClick.bind(this)
}
handleClick(){
axios.get('http://localhost:8080/list')
.then(response => this.setState({tasks:response.data}))
}
render(){
return(
<div>
<button className='button' onClick={this.handleClick}>Click Me</button>
<ul>{this.state.tasks.map(task =>(<h3>
<li>TaskID:{task.task_ID}</li>
<li>TaskName:{task.name}</li>
<li>TaskOwner:{task.owner_ID}</li>
<li>Task CreatorID:{task.creator_ID}</li>
<li>Task status:{task.status}</li>
<li>Description:{task.description}</li>
<li>notes:{task.notes}</li>
<li>statusChangedOn:{task.status_Changed_On}</li>
<li>Priority:{task.priority}</li>
<li>bookMarked:{task.isBookmarked.toString()}</li>
<li> createdon:{task.created_On}</li>
</h3>))}</ul>
</div>
)
}
}

export default GetTaskData;
