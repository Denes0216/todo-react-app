import React from "react"
import Todo from './Todo.jsx'

function TodoList ({todos, setTodos, isCompletedOnlyChecked}) {
    
    var list = todos.map((todo) => {
        if(isCompletedOnlyChecked) {
            if(todo.completed === true) {
                return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}></Todo>
            }
        } else {
            return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}></Todo>
        }
    })
    
    return <ul>
        {list}
    </ul>
}

export default TodoList;