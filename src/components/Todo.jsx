import React from "react"

function Todo({todo, todos, setTodos}) {
    
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

    function deleteTodo (id) {
        const requestOptions = {
          method: 'DELETE'
        };
        fetch(
          "https://localhost:44367/todos/" + id,
          requestOptions
        )
        .then(setTodos(todos.filter((todo) => todo.id !== id)))
      }
    
    return <li className="todo-li">
    <label>
      <input onClick={() => toggleTodo(todo.text, todo.id, todo.completed)} type="checkbox" defaultChecked={todo.completed} />
      {todo.text}
    </label>
    <button className='btn btn-danger' onClick={()=> deleteTodo(todo.id)}>Delete</button>
    </li>
}

export default Todo;