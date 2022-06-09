import React from 'react'
import '../../App.css';
import { FaUndo } from "react-icons/fa";

export class EmptyTodo extends React.Component{
 

    render(){
        let items=this.props.list
        return(
            <div className="footer">
                <span>You have {items.length} pending task</span>
                <button className="buttonstyy" onClick={() => { this.props.deletetodo() }}>Clear All</button>
                <br></br>
                <button className='resetbutton' onClick={()=>{this.props.reset()}}>Reset  <FaUndo/></button>
            </div>
            );
    }
}