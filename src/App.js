import React, { useState } from 'react';
import './App.css';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

function App() {
  
  const [input, setInput] = useState("");
  const[list,setList] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const inputEventhandler=(e)=>{
    setInput(e.target.value);
  }

  const listShowEvent=()=>{
    setList((preval)=>{
      return [input, ...preval];
    })
    setInput("");
  }

  function deleteInput(id) {
    let updatedList = [...list].filter((input) => input.id !== id);
    setList(updatedList);
  }

  function handleEditClick(todolist) {
    setIsEditing(true);
    setCurrentTodo({ ...todolist });
  }

return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        </header>
        <div className="App-body">
          <input type="text" Name="todo" placeholder="Enter text" value={input} onChange={inputEventhandler} />
          <button onClick={listShowEvent}>Add</button>
         </div>
         {list.map((item)=>{
           return <div className="result"><p>{item}</p>
           
           <div className="icons"onClick={() => deleteInput(input.id)}><FaTrash/> &nbsp;</div>
           <div className="iconedit"onClick={() => handleEditClick(currentTodo)}><FaEdit/></div> 
            </div>
         }
         )}
</div>
 );
}

export default App;