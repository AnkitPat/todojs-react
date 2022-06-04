
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

  deleteitem(value){
    //console.log(value)
    var list=this.state.todo
   // var index = a.indexOf(value);
    list.splice(value, 1);
    this.setState({todo:list})
  }
 

cleartodo(){
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
   var items=this.state.todo
  
  

  return (

    <div className="App">
      <header className="App-header">
        <div className="todoblock"> 
        <label className="header">Todo App</label>

        <div className="todoitems"><input className="input_list" placeholder="Add your Todo" value={this.state.text} onKeyPress={this.handleKeyPress} onChange={(Event)=>{this.setState({text: Event.target.value})}}></input>
        <button className="buttonsty" onClick={()=>{this.addtodo()}}>+</button></div>
        
      
        {items.map((item,index) => {
          return <span className="todoitem"><li className="itemsstyle" >{item}<button  className="sty" onClick={(event)=>{this.deleteitem(index)}}><FaTrashAlt /></button></li></span>;
          
       })}
        
       <div className="footer"><span>You have {items.length} pending task</span><button  className="buttonstyy" onClick={()=>{this.cleartodo()}}>Clear All</button></div> 
      </div>
      </header>
    </div>
  );
}}

export default App;
