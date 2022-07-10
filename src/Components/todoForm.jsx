/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */

import React , {useState} from 'react'
import { Typography } from '@mui/material';
function TodoForm(props) {
    console.log(props)
    const [input , setInput] = useState("");
    const handleChange = e =>{
        setInput(e.target.value)
    }
    const handleSubmit = e =>{
      e.preventDefault();
      
      props.onSubmit({
          id: Math.floor(Math.random()*10000),
          text: input
      });
      setInput("");
    }
    return (
        <div className='todoForm '>
               {props.showTodo && <Typography>{props.todo.text}</Typography>}
    <form action="" className="todo-form"onSubmit={handleSubmit}>
    <input 
    type="text" 
    placeholder='add a todo '
     value={input} 
     name="text" 
     className='todo-input'
     onChange={handleChange}/>
<button className="todo-input">
    {props.showTodo? "edit":"add todo"}</button>
    </form>      

        </div>
    )
}

export default TodoForm;