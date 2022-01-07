import React, {useState} from 'react'
import Todolist from './todoList'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
function Todo({completeTodo, todos, removeTodo}) {
    const [edit, setEdit] = useState({
        id:  null,
        value: "",
    })
    localStorage.setItem('todo', JSON.stringify(todos));
    const todoItem = JSON.parse(localStorage.getItem('todo'));
console.log(todoItem.todo,"pppppp-p")
    return (
        <div>
       { todos.map((todo, index)=>(
            <div key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
                <div className='icons'>
                    <AiOutlineCloseCircle onClick={()=>removeTodo(todo.id)}/>
                  <TiEdit  onClick={()=>setEdit({id:todo.id, value:todo.text})}/>
                 </div>
            </div>
        ))}
</div>
    )
}

export default Todo
