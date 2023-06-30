import { useState } from "react";

function InputForm({ setTodos, setIsCompletedOnlyChecked }) {
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
            .then(response => {
                if (response.ok) {
                    return response.json()                    
                } else {
                    throw new Error("error")
                }
            })
            .then(data => {
                setTodos(todos => [...todos, data])
            })
            .then(setNewTodo(""))
            .catch(error => console.log("error", error))
    }

    return <form className='new-todo-form' onSubmit={handleSubmit}>
        <div className="completed">
            <label htmlFor="show-completed" >Show completed only</label>
            <input type="checkbox" id="show-completed" onChange={() => setIsCompletedOnlyChecked(prevstate => !prevstate)} />
        </div>
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