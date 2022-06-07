
import './App.css';
import React from 'react'
import {InputTodo} from "./components/Inputtodo/Inputtodo"
import {DisplayList} from "./components/displaytodolist/displaytodolist"
import {EmptyTodo} from "./components/emptytodo/emptytodo"

class App extends React.Component {
  state = {
    text: "",
    todo: [],
  }

  addTodo(text) {
    var list = this.state.todo
    if (text.length > 0) {
      list.push({ text: text, done: 0 })
      this.setState({ todo: list })
    }
    this.state.text = ""
    localStorage.setItem('Todo', JSON.stringify(list))
  }

  itemDone(indexx) {
    var todolistdone = this.state.todo
    if (todolistdone[indexx].done === 0) {
      todolistdone[indexx].done = 1
    }
    else {
      todolistdone[indexx].done = 0
    }
    this.setState({ todo: todolistdone })

  }

  deleteItem(index) {
    var list = this.state.todo
    list.splice(index, 1)
    console.log("delete call")
    this.setState({ todo: list })
  }


  clearTodo() {
    this.setState({ todo: [] })
    localStorage.setItem('Todo', JSON.stringify([]))
  }

reset(){
  let list=JSON.parse(localStorage.getItem('Todo'))
  
  this.setState({todo: list})
}


  
  render() {
    var items = this.state.todo

    console.log(this.state)

    return (


      <div className="App">
        <header className="App-header">
          <div className="todoblock">
            <label className="header">Todo App</label>

            <InputTodo inputtext={(text)=>{this.addTodo(text)}}/>
            <DisplayList  list={this.state.todo}  selectdone={(index)=>{this.itemDone(index)}} itemdel={(index)=>{this.deleteItem(index)}}/>
            <EmptyTodo deletetodo={()=>{this.clearTodo()}} list={this.state.todo}/>
            <button onClick={()=>{this.reset()}}>Reset</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
