import { useEffect, useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import TodoList from './components/todos/TodoList'
import Header from './components/Header'

export default function App() {
  const [todos, setTodos] = useState([])
  const [isCompletedOnlyChecked, setIsCompletedOnlyChecked] = useState(false)

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

  return (<>
    <Header/>
    <InputForm todos={todos} setTodos = {setTodos} setIsCompletedOnlyChecked={setIsCompletedOnlyChecked} isCompletedOnlyChecked={isCompletedOnlyChecked}/>
    <TodoList todos={todos} setTodos={setTodos} isCompletedOnlyChecked={isCompletedOnlyChecked}/>
  </>)
}
