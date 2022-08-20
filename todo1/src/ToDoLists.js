import React from 'react'

 const ToDoLists = (props) => {
  return (
    <div className="todo">
        <button className="butt" onClick={() =>{
            props.onSelect(props.id)
        }}><b>x</b></button><li> {props.text} </li> 
    </div>
  );
};
export default ToDoLists;
