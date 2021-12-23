import React, {Component } from 'react';
import ClassComponent from './ClassComponent';
import ClassComponent1 from './ClassComponent1';
import PropsExample from './PropsExample';

class ClassComponentExample extends Component{
    render(){
        return(
            <div>
                <h1>My class component</h1>
                <PropsExample name ="navya" age = {21}>
                    <p>This is my Child tag</p>
                    </PropsExample>
                <PropsExample name = "nani" />
                <ClassComponent name ="deva" age ={19}></ClassComponent>
                <ClassComponent1 stuID = {405} stuname = "nani" stumarks = {70}></ClassComponent1>
            </div>
        )
    }
}

export default ClassComponentExample;