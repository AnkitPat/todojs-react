
import './App.css';
import React from 'react'
import {InputTodo} from "./components/Inputtodo/Inputtodo"
import {DisplayList} from "./components/displaytodolist/displaytodolist"
import {Emptytodo} from "./components/emptytodo/emptytodo"

class App extends React.Component {
  state = {
    text: "",
    todo: [],
  }

  addtodo(text) {
    var list = this.state.todo
    if (text.length > 0) {
      list.push({ text: text, done: 0 })
      this.setState({ todo: list })
    }
    this.state.text = ""
    localStorage.setItem('Todo', list)
  }

  itemdone(indexx) {
    var todolistdone = this.state.todo
    if (todolistdone[indexx].done === 0) {
      todolistdone[indexx].done = 1
    }
    else {
      todolistdone[indexx].done = 0
    }
    this.setState({ todo: todolistdone })

  }

  deleteitem(index) {
    var list = this.state.todo
    list.splice(index, 1)
    console.log("delete call")
    this.setState({ todo: list })
  }


  cleartodo() {
    this.setState({ todo: [] })
  }




  
  render() {
    var items = this.state.todo

    console.log(this.state)

    return (


      <div className="App">
        <header className="App-header">
          <div className="todoblock">
            <label className="header">Todo App</label>

            <InputTodo inputtext={(text)=>{this.addtodo(text)}}/>
            <DisplayList  list={this.state.todo}  selectdone={(index)=>{this.itemdone(index)}} itemdel={(index)=>{this.deleteitem(index)}}/>
            <Emptytodo deletetodo={()=>{this.cleartodo()}} list={this.state.todo}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
