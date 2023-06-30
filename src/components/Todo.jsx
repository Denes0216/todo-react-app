import React, { useState } from "react"
import EditableText from "./EditableText"

function Todo({ todo, todos, setTodos }) {

  const [isBeingEdited, setIsBeingEdited] = useState(false)

  function toggleTodo(text, id, completed) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text, completed: !completed })
    };
    fetch(
      "https://localhost:44367/todos/" + id,
      requestOptions
    )
  }

  function deleteTodo(id) {
    const requestOptions = {
      method: 'DELETE'
    };
    fetch(
      "https://localhost:44367/todos/" + id,
      requestOptions
    )
      .then(setTodos(todos.filter((todo) => todo.id !== id)))
  }

  function editTodo() {
    setIsBeingEdited(prevstate => !prevstate)
  }

  return <li className="todo-li">
    <label>
        <input onClick={() => toggleTodo(todo.text, todo.id, todo.completed)} type="checkbox" defaultChecked={todo.completed} />
        <EditableText todo={todo} isBeingEdited={isBeingEdited} setIsBeingEdited={setIsBeingEdited}/>
    </label>
    <div>
      <button id="edit" className='btn btn-danger' onClick={() => editTodo()}>Edit</button>
      <button id="delete" className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  </li>
}

export default Todo;