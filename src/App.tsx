import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/Todolist'
import './App.css'

function App() {
  

  return (
    <>
    <div>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
    </>
  )
}

export default App
