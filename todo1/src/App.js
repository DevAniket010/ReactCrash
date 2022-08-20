import React, { useState } from 'react'
import './App.css'
import ToDoLists from './ToDoLists';



const App = () => {
  const [inputlist,setInputList]=useState("");
  const [items, setItems]= useState([]);
  const itemEvent= (event) =>{
    setInputList(event.target.value)
  };
  const listOfitems = () =>{
     setItems((oldItems) =>{
      return [...oldItems,inputlist];
     });
     setInputList("");
  };
  const deleteItems = (id) =>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index) =>{
         return  index !==id;
      })
    })
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1> ToDo List </h1>
        <br/>
        <input type="text" placeholder="Add task to your list" onChange={itemEvent} value={inputlist}/>
        <button  classname="button1" onClick={listOfitems}> + </button>


        <ol>
          {items.map((itemval,index) => {
           /* return <div className="todo">
            <button className="butt" onClick={deleteItems}><b>x</b></button><li> {itemval} </li> 
            
            </div>*/
            return (<ToDoLists
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItems}
              />
            
            );
            
            
          })}
        </ol>
        
      </div>
    </div>
  );
};
  export default App;