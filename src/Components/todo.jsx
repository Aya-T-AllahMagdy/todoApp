import React, { useState } from "react";
import Todolist from "./todoList";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./todoForm";
function Todo(props) {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    props.updateTodo(edit.id, value);
    setShow(true);
    setEdit({
      id: null,
      value: "",
    });
  };

//   if (edit.id) {
//     return <TodoForm onSubmit={submitUpdate} />;
//   }
  return (
    <div>
      {props.todos.map((todo, index) => (
        <div key={index}>
            { edit.id === todo.id ? <TodoForm onSubmit={submitUpdate} todo={todo} showTodo /> : 
            <div  className='todoForm lists '>
            <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <AiOutlineCloseCircle onClick={() => props.removeTodo(todo.id)} />
            <TiEdit
              onClick={() => [setEdit({ id: todo.id, value: todo.text })]}
            />
          </div>
            </div> }
       
        </div>
      ))}
    </div>
  );
}

export default Todo;
