import React from "react"
import Todo from './Todo.jsx'

function TodoList ({todos, setTodos}) {
    
    var list = todos.map((todo) => <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}></Todo>)
    
    return <ul>
        {list}
    </ul>
}

export default TodoList;