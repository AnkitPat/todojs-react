
import '../../App.css';
import '../Registration/index.css';
import React from 'react';


import { addDoc, arrayUnion, collection, doc, FieldValue, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import db from '../../config';
import { async, getModularInstance } from '@firebase/util';




class Login extends React.Component {
  state = {
    email: "",
    password: "",
  }

  async login(){
    console.log(this.state.email)
    console.log(this.state.password)

    // const todoCollection = doc(db, "registration", this.state.email);
    //  setDoc(todoCollection, {
    //     name : this.state.name,
    //     email : this.state.email,
    //     password : this.state.password,
    //     position : this.state.position
    // });

    const docRef = doc(db, "registration", this.state.email)
    const docSnap = await getDoc(docRef);
    const todoList1 = docSnap.data()
    //const todoList1 = docSnap.docs.map(doc => doc.data());
    let databasePassword= todoList1.password

    if(databasePassword == this.state.password){
        console.log("correct")
    }
    else{
        console.log("Incorrect")
    }
  }
  

  render() {

    return (
      <div className='App'>
        <header className="App-header">
            <div className="todoblock">
                <label className="header">Login</label>
                <div className='form'>
                    <input className="field" placeholder="Email" onChange={(event)=>{this.setState({email: event.target.value})}}></input>
                    <input className="field" placeholder="Password"  onChange={(event) => {this.setState({password: event.target.value})}}></input>
                   
                   <button className='registration_button' type="submit" onClick={() => {this.login()}}>Registration</button>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default Login;
