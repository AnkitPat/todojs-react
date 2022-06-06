import React from 'react'
import '../../App.css';
import { FaTrashAlt } from "react-icons/fa";

export class DisplayList extends React.Component{
 

    render(){
        let items=this.props.list
        return(
            <div className={items.length > 5 ? "vai" : " "}>
            {items.map((item, index) => {
              return <span key={index} className={items[index].done > 0 ? "todoitem done" : "todoitem"}>
                <li className="itemsstyle" onClick={(event) => { this.props.selectdone(index) }}>{item.text}
                  <button className="sty" onClick={(event) => {event.stopPropagation();  this.props.itemdel(index) }}><FaTrashAlt />
                  </button>
                </li>
              </span>;
            })}
          </div>
            );
    }
}