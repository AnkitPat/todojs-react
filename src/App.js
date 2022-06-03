
import './App.css';
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

class App extends React.Component{
  state={
    text:"",
    todo:[]
  
  }
  addtodo(){
    var list=this.state.todo
    var text=this.state.text
    if (text.length>0){
      list.push(text)
      this.setState({todo:list})
    }
  this.state.text=""
  }

  dele(value){
    console.log(value)
    var a=this.state.todo
    var index = a.indexOf(value);
    a.splice(index, 1);
    this.setState({todo:a})
  }
 

cle(){
  var a=this.state.todo
  a=[]
  this.setState({todo:a})
}

handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    this.addtodo();
  }
}
  render(){
   var a=this.state.todo
  
  

  return (

    <div className="App">
      <header className="App-header">
        <div className="todoblock"> 
        <label className="header">Todo App</label>

        <spam className="todoitems"><input className="input_list" placeholder="Add your Todo" value={this.state.text} onKeyPress={this.handleKeyPress} onChange={(Event)=>{this.setState({text: Event.target.value})}}></input>
        <button className="buttonsty" onClick={()=>{this.addtodo()}}>+</button></spam>
        
      
        {a.map((item) => {
          return <span className="todoitem"><li className="itemsstyle" >{item}<button  className="sty" value={item} onClick={(Event)=>{this.dele(Event.target.value)}}><FaTrashAlt /></button></li></span>;
          
       })}
        
       <span className="footer"><span>You have {a.length} pending task</span><button  className="buttonstyy" onClick={()=>{this.cle()}}>Clear All</button></span> 
      </div>
      </header>
    </div>
  );
}}

export default App;
