import React from 'react'
import '../../App.css';

export class EmptyTodo extends React.Component{
 

    render(){
        let items=this.props.list
        return(
            <div className="footer"><span>You have {items.length} pending task</span><button className="buttonstyy" onClick={() => { this.props.deletetodo() }}>Clear All</button></div>
            );
    }
}