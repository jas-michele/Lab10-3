import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/Todolist'
import { FilterButtons } from './components/Filter/FilterButton'
import './App.css'

function App() {
  

  return (
    <>
    <div>
      <h1>Todo App</h1>
      <FilterButtons />
      <TodoInput />
      <TodoList />
    </div>
    </>
  )
}

export default App
