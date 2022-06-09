import React from 'react'
import '../../App.css';
import { FaPlus } from "react-icons/fa";

export class InputTodo extends React.Component{
    state={
        text:"",
        category:"Glossaries"
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.inputtext(this.state.text, this.state.category)
            this.setState({text:""})
        }
      }

    render(){
        let text=this.state.text
        let category=this.state.category
        return(
            <div className="todoitems">
                <input className="input_list" placeholder="Add your Todo" value={this.state.text} onKeyPress={this.handleKeyPress} onChange={(Event) => { this.setState({ text: Event.target.value }) }}></input>
                <select className="categorie" id="cars" onChange={(event)=>{this.setState({category:event.target.value})}} onKeyPress={this.handleKeyPress}  value={this.state.category}>
                    <option value="Glossaries">Glossaries</option>
                    <option value="Food">Food</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Cloth">Cloth</option>
                    <option value="Footwear">Footwear</option>
                </select>
              <button className="buttonsty" onClick={() => { this.props.inputtext(text,category) }}><FaPlus /></button>
            </div>
        );
    }
}