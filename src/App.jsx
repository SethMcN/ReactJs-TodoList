import { useState, useEffect } from "react"

import ToDoInput from "./components/ToDoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([    
    "Learn React",
    "Learn JSX",
    "Learn JavaScript"])

  const [todovalue, setTodoValue] = useState('')

  function handleAddTodos(todo) {
    const newTodos = [...todos, todo]

    setTodos(newTodos)
  }

  function handleDeleteTodos(index) {
    const newTodos = todos.filter((todo, i) => {
      return i !== index
  })



    setTodos(newTodos)
  }

  function handleEditTodos(index) {
    const valToEdit = todos[index]
    setTodoValue(valToEdit)
    handleDeleteTodos(index)
 
  }

  return (
  <>
    <ToDoInput todovalue={todovalue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
    <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos} />


  </>
  )
}

export default App
