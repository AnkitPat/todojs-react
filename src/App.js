import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state={
    text:"",
    list:[]
  
  }
  add(){
   var a=this.state.list
  var b=this.state.text
  if (b.length>0)
    a.push(b)
    this.setState({list:a})
  }

  dele(value){
    var a=this.state.list
    var index = a.indexOf(value);
    a.splice(index, 1);
    this.setState({list:a})
  }
 

cle(){
  var a=this.state.list
  a=[]
  this.setState({list:a})
}
  render(){
   var a=this.state.list
  return (

    <div className="App">
      <header className="App-header">
        <label className="header">Todo App</label>
        <spam className="todoitems"><input className="input_list" placeholder="Add your Todo" onChange={(Event)=>{this.setState({text: Event.target.value})}}></input>
        <button className="buttonsty" onClick={()=>{this.add()}}>+</button></spam>
        
      
        {a.map(item => {
          return <spam><li className="itemsstyle" >{item}<button  className="sty" value={item} onClick={(Event)=>{this.dele(Event.target.value)}}><i class="fa-solid fa-trash"></i></button></li></spam>;
        })}
        
       <spam className="footer"><spam>You have {a.length} pending task</spam><button  className="buttonsty" onClick={()=>{this.cle()}}>Clear All</button></spam> 
      </header>
    </div>
  );
}}

export default App;
