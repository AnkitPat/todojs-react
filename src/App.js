
import './App.css';
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

class App extends React.Component{
  state={
    text:"",
    todo:[],
    tododone:[]
  }

  
  addtodo(){
    var list=this.state.todo
    var text=this.state.text
    if (text.length>0){
      list.push(text)
      this.setState({todo:list})
    }
  this.state.text=""

  var tododonelist=this.state.tododone
  tododonelist.push(0)
  this.setState({tododone:tododonelist})

//  console.log(this.state.tododone)
  localStorage.setItem('Todo', list)
  }

  itemdone(indexx){
    var todolistdone=this.state.tododone

    if(todolistdone[indexx]===0){
      todolistdone[indexx]=1
    }
    else{
      todolistdone[indexx]=0
    }

    this.setState({tododone:todolistdone})

   }



  deleteitem(index){
   
    //console.log(value)
    var list=this.state.todo
  
    list.splice(index, 1)
   
    

    var tododonelist=this.state.tododone
    tododonelist.splice(index, 1)
    this.setState({tododone:tododonelist,todo:list})

  //  console.log(tododonelist)
  }
 

cleartodo(){
  var list=this.state.todo
  list=[]
  this.setState({todo:list})

  var listdone=this.state.todo
  listdone=[]
  this.setState({tododone:listdone})
}


  

handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    this.addtodo();
  }
}
  render(){
   var items=this.state.todo
  
  console.log(this.state)

  return (
    

    <div className="App " key={`${items.length}`}>
      <header className="App-header">
        <div className="todoblock"> 
        <label className="header">Todo App</label>

        <div className="todoitems">
          <input className="input_list" placeholder="Add your Todo" value={this.state.text} onKeyPress={this.handleKeyPress} onChange={(Event)=>{this.setState({text: Event.target.value})}}></input>
        <button className="buttonsty" onClick={()=>{this.addtodo()}}>+</button></div>
        
        <div className={items.length>5 ? "vai":" "}>
        {items.map((item,index) => {
          return <span  key={index} className={this.state.tododone[index] > 0 ? "todoitem done":"todoitem"}>
            <li className="itemsstyle" onClick={(event)=>{this.itemdone(index)}}>{item}
            <button  className="sty" onClick={(event)=>{this.deleteitem(index)}}><FaTrashAlt />
            </button></li></span>;
          
       })}
        </div>
       <div className="footer"><span>You have {items.length} pending task</span><button  className="buttonstyy" onClick={()=>{this.cleartodo()}}>Clear All</button></div> 
      </div>
      </header>
    </div>
  );
}}

export default App;
