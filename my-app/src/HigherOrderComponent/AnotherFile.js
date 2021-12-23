import React,{Component} from 'react';
import UpdatedComponent from './UpdateComponent';

class AnotherFile extends Component{


    render(){
        const {count, incrementCount}=this.props
            
        return<h2 onMouseOver={incrementCount}>Clicked {count} times</h2>
    }
}

export default UpdatedComponent(AnotherFile);