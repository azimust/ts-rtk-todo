import './App.css'
import NewAsyncTodo from './features/AsyncTodo/NewAsyncTodos'
import AsyncTodoList from './features/AsyncTodo/asyncTodoList'
import NewTodo from './features/Todo/NewTodo'
import TodoList from './features/Todo/TodoList'

function App() {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />

      <hr />

      <NewAsyncTodo />
      <AsyncTodoList />
    </div>
  )
}

export default App
