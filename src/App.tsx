import { useContext } from 'react'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/Todolist'
import { FilterButtons } from './components/Filter/FilterButton'
import { ThemeContext } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import './App.css'

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`container ${theme}`}>
        <h1>Todo App</h1>
        <Navbar />

        <FilterButtons />
        <TodoInput />
        <TodoList />
      </div>
    </>
  )
}

export default App
