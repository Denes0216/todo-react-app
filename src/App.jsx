import { useEffect, useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import TodoList from './components/TodoList'
import Header from './components/Header'

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://localhost:44367/todos"
        )
      ).json();

      setTodos(data);
    };
    dataFetch();
  }, []);

  return <>
    <Header/>
    <InputForm setTodos = {setTodos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
  </>
}
