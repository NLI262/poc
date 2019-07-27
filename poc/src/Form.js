import React from 'react';
export default class Form extends React.Component{
state={

Email:'',
Password:'',
} 

onSubmit = e => {
    e.preventDefault();
    console.log(this.state);    
   } 

render() {
    
    return(

<form>
    <h3>This is a Employee login form</h3>
    
     <br/>
    
    

<input placeholder='Email' type="email" 
     value= {this.state.value}
     onChange={ e=> this.setState({Email: e.target.value})}/>
     <br/>
    

<input placeholder='password' type="password"
     value= {this.state.value}
     onChange={ e=> this.setState({Password : e.target.value})}/>
     <br/>

     <button   onClick={e => this.onSubmit(e) }> submit</button>
     <a href="/cre"  class="button success">login</a>
     <br/>


</form>

    );



}


}