
import './App.css';
import React from 'react'
import { InputTodo } from "./components/Inputtodo/Inputtodo"
import { DisplayList } from "./components/displaytodolist/displaytodolist"
import { EmptyTodo } from "./components/emptytodo/emptytodo"


import { addDoc, arrayUnion, collection, doc, FieldValue, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import db from './config';
import { async, getModularInstance } from '@firebase/util';




class App extends React.Component {
  state = {
    text: "",
    todo: [],
  }

  // const docRef = doc(db, "cities", "SF");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }


  async getList() {
    //way2
    const docRef = doc(db, "TodoList", "todos")
    const docSnap = await getDoc(docRef);
    const todoList1 = docSnap.data()
    console.log(todoList1,"--2")
    //this.setState({ todo: todoList.list }) 


    //way1
    const todoCollection = collection(db, 'TodoList1');
    const todoDocs = await getDocs(todoCollection);
    const todoList2 = todoDocs.docs.map(doc => doc.data());
    console.log(todoList2,"--1")

  }

  addTodo(text, category) {
    var list = this.state.todo
    text = text.trim()
    if (text.length > 0) {
      list.push({ text: text, done: 0, category: category })
      this.setState({ todo: list })
    }

    localStorage.setItem('Todo', JSON.stringify(list))

    //way2
    let todoReference = doc(db, "TodoList", "todos")

    updateDoc(todoReference, {
      list: arrayUnion(
        {
          text,
          category,
        }
      )
    })


    //way1

    const todoCollection = doc(db, "TodoList1", "12344321");
     setDoc(todoCollection, {
        text,
        category
    });

    // const todoCollection = collection(db, 'TodoList1');
    // addDoc(todoCollection,{
    //   text,
    //   category
    // })



    // collectionReference.doc('todos').update(
    //   {
    //       list: FieldValue.arrayUnion(
    //           {
    //           text,
    //           category,
    //           }
    //       )
    //   })





    this.state.text = ""
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
    console.log("a")
  }

  reset() {
    let list = JSON.parse(localStorage.getItem('Todo'))

    this.setState({ todo: list })
  }

  componentDidMount() {
    window.addEventListener('onbeforeunload', this.clearTodo())
    this.getList()
  }



  render() {
    var items = this.state.todo

    console.log(this.state)

    return (


      <div className="App">
        <header className="App-header">
          <div className="todoblock">
            <label className="header">Todo App</label>

            <InputTodo inputtext={(text, category) => { this.addTodo(text, category) }} />
            <DisplayList list={this.state.todo} selectdone={(index) => { this.itemDone(index) }} itemdel={(index) => { this.deleteItem(index) }} />
            <EmptyTodo deletetodo={() => { this.clearTodo() }} reset={() => { this.reset() }} list={this.state.todo} />

          </div>
        </header>
      </div>
    );
  }
}

export default App;
