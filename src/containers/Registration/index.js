import '../../App.css';
import './index.css';
import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import { withRouter } from 'react-router'
import { addDoc, arrayUnion, collection, doc, FieldValue, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import db from '../../config';
import { async, getModularInstance } from '@firebase/util';
import { encryptEmail } from '../../utils';




class Registration extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    position: "",
    todo: []
  }

  async qwe() {
    console.log(this.state.name)
    console.log(this.state.email)
    console.log(this.state.password)
    console.log(this.state.position)

    const emailRef = doc(db, "registration", this.state.email);
    const emailData = await getDoc(emailRef)
    if (emailData.exists()) {
      alert("Already Registered")
    }
    else {
      setDoc(emailRef, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        position: this.state.position,
        list: []
      });
      this.props.navigate({
        pathname: '/todolist',
    //    search: `?email=${encryptEmail(this.state.email)}`
        search: `?email=${this.state.email}`
  });

      
      //this.props.navigate(`/todolist/${encryptEmail(this.state.email)}`)
    }

    // const history = useNavigate();
    // history('/login')

    // const docRef = doc(db, "registration", this.state.email)
    // const docSnap = await getDoc(docRef);
    // const todoList1 = docSnap.data()
    // //const todoList1 = docSnap.docs.map(doc => doc.data());
    // console.log(todoList1.name)
  }


  render() {
      
    return (
      <div>

        <div className='App'>
          <header className="App-header">
            <div className="todoblock">

              <label className="header">Registration</label>
              <div className='form'>
                <input className="field" placeholder="Name" onChange={(event) => { this.setState({ name: event.target.value }) }}></input>
                <input className="field" placeholder="Email" onChange={(event) => { this.setState({ email: event.target.value }) }}></input>
                <input className="field" placeholder="Password" onChange={(event) => { this.setState({ password: event.target.value }) }}></input>
                <select className="field" onChange={(event) => { this.setState({ position: event.target.value }) }} >
                  <option value="Tech lead">Tech lead</option>
                  <option value="Developer">Developer</option>
                  <option value="Intern">Intern</option>
                  <option value="Trainee">Trainee</option>
                </select>
                <button className='registration_button' type="submit" onClick={() => { this.qwe() }}>Registration</button>
                <button onClick={() => {
                  console.log(encryptEmail('a@gm.com'));
                }}>check1</button>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}


function WithNavigate(props) {
  let navigate = useNavigate();
  return <Registration {...props} navigate={navigate} />
}

export default WithNavigate

//export default Registration;
