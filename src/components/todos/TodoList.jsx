import React, { useEffect, useState } from "react"
import Todo from './Todo'

function TodoList({ todos, setTodos, isCompletedOnlyChecked }) {

    var list = todos.map((todo) => {
        if (isCompletedOnlyChecked) {
            if (todo.completed === true) {
                return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}></Todo>
            }
        } else {
            return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}></Todo>
        }
    })

    useEffect(() => {
        list = todos.map((todo) => {
            if (isCompletedOnlyChecked) {
                if (todo.completed === true) {
                    return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}></Todo>
                }
            } else {
                return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}></Todo>
            }
        })
    }, [])

    return <ul key={1}>
        {list}
    </ul>
}

export default TodoList;