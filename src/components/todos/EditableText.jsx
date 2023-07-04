import React, { useState } from "react"

export default function EditableText({todo, isBeingEdited, setIsBeingEdited, setTodos, todos}) {

    const [editedText, setEditedText] = useState(todo.text)

    function saveChanges(id) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: editedText, completed: todo.completed })
          };
          fetch(
            "https://localhost:44367/todos/" + id,
            requestOptions
          )
          .then(() => setTodos(todos.map(
            todo => {
                if (todo.id !== id) {
                  return todo;
                } else {
                  return {
                    ...todo,
                    text: editedText,
                  };
                }
              }
          )))
          .then(() => setIsBeingEdited(false))
    }

    if (isBeingEdited === false) {
        return <>
        {todo.text}
        </>
    } else {
        return <>
        <input type="text" defaultValue={todo.text} onChange={(e) => setEditedText(e.target.value)}/>
        <button onClick={() => saveChanges(todo.id)}>Save</button>
        <button>Discard</button>
        </>
    }
}