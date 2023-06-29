import { useState } from "react";

function InputForm({setTodos}) {
    const [newTodo, setNewTodo] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: newTodo, completed: false })
        };
        
        fetch(
            "https://localhost:44367/todos",
            requestOptions
        )
        .then(response => response.json())
            .then(data => {
                console.log(data);
                setTodos(todos => [...todos, data])
            })
            .then(setNewTodo(""))
    }

    return <form className='new-todo-form' onSubmit={handleSubmit}>
        <input
            type="text"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            id='todo'
            placeholder="Type here ..." />
        <button id="add-btn">Add</button>
    </form>
}

export default InputForm;