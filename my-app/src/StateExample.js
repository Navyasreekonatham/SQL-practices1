import React, {Component} from 'react'


class StateExample extends Component {
    constructor(){
        super()
        this.state={message:'Welcome Visitor'}
        this.changeMessage = this.changeMessage.bind(this);

    }
    changeMessage(){
        this.setState({message:'Thank u for subscribe'})
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <h2>Welcome to sonanta</h2>
                <button onClick = {this.changeMessage}>Change</button>
            </div>
        )
    }
}

export default  StateExample;