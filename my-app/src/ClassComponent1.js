import React, { Component } from 'react';

class ClassComponent1 extends Component{

     render(){
         return(
             <div>
                 {this.props.stuID}
                 {this.props.stuname}
                 {this.props.stumarks}
             </div>
         );
     }
}
export default ClassComponent1;