import React from 'react'
import '../../App.css';
import { FaTrashAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { doc, getDoc } from 'firebase/firestore';
import db from '../../config';
import { decryptEmail } from '../../utils';
export class DisplayList extends React.Component {
  state = {
    search: "",
    todo: []
  }

  filter(value) {
    this.setState({ search: value })
  }

  render() {
    let items = this.props.list
    //let items = this.state.todo
    let search = this.state.search

    console.log("display : ", items)

    return (


      <div>
        {/* className={list.category.includes(search) > 0 ? "itemsstyle":"itemsstyle try"} */}
        <input className='filter' placeholder="Search" onKeyUp={(event) => { this.filter(event.target.value) }}></input>

        <div className={items.length > 5 ? "vai" : " "}>
          <table className='table'>
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Todo</th>
                <th style={{ width: "40%" }}>Category</th>
                <th style={{ width: "10%" }}></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return <tr key={index}>
                  <td className={item.done > 0 ? "todoitem done" : "todoitem"} onClick={(event) => { this.props.selectdone(index) }}>{item.text}</td>
                  <td>{item.category}</td>
                  <td><button className="sty" onClick={(event) => { event.stopPropagation(); this.props.itemdel(index) }}><FaTrashAlt /></button></td>
                </tr>

              })}
            </tbody>
          </table>
        </div>

      </div>

    );
  }
}