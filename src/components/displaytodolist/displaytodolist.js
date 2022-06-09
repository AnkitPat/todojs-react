import React from 'react'
import '../../App.css';
import { FaTrashAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export class DisplayList extends React.Component{
  state={
    search:""
  }

  filter(value){
    this.setState({search:value})
  }

    render(){
        let items=this.props.list
        let search=this.state.search

        
        

        return(
          //   <div className={items.length > 5 ? "vai" : " "}>
          //   {items.map((item, index) => {
          //     return <span key={index} className={items[index].done > 0 ? "todoitem done" : "todoitem"}>
          //       <li className="itemsstyle" onClick={(event) => { this.props.selectdone(index) }}>{item.text}&nbsp;&nbsp;
          //       &nbsp;{item.category}<button className="sty" onClick={(event) => {event.stopPropagation();  this.props.itemdel(index) }}><FaTrashAlt />
          //         </button>
          //       </li>
          //     </span>;
          //   })}
          // </div>
         

          <div>

          <input className='filter' placeholder="Search" onKeyUp={(event)=>{this.filter(event.target.value)}}></input>

          <div className={items.length > 5 ? "vai" : " "}>
            <table className='table'>
              <tr>
                <th style={{width:"50%"}}>Todo</th>
                <th style={{width:"40%"}}>Category</th> 
                <th style={{width:"10%"}}></th>
              </tr>
              {items.map((item, index) => {
               return <tr className={item.category.includes(search) > 0 ? "itemsstyle":"itemsstyle try"} >
                <td  className={items[index].done > 0 ? "todoitem done" : "todoitem"}  onClick={(event) => { this.props.selectdone(index) }}>{item.text}</td>
                <td>{item.category}</td>
                <td><button className="sty"  onClick={(event) => {event.stopPropagation();  this.props.itemdel(index) }}><FaTrashAlt /></button></td>
              </tr>
            })}

            </table>
          </div>
    
          </div>
          
            );
    }
}