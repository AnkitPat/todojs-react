import React from 'react'
import '../../App.css';
import { FaPlus } from "react-icons/fa";

export class InputTodo extends React.Component{
    state={
        text:""
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.inputtext(this.state.text)
            this.setState({text:""})
        }
      }

    render(){
        let text=this.state.text
        return(
            <div className="todoitems">
              <input className="input_list" placeholder="Add your Todo" value={this.state.text} onKeyPress={this.handleKeyPress} onChange={(Event) => { this.setState({ text: Event.target.value }) }}></input>
              <button className="buttonsty" onClick={() => { this.props.inputtext(text) }}><FaPlus /></button>
            </div>
        );
    }
}