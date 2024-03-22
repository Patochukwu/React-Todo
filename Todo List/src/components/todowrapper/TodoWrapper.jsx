import { useState } from 'react'
import { TodoForm } from '../todoform/TodoForm'
import { TodoItems } from '../todoitems/TodoItems'


import './TodoWrapper.css'


export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        task: todo
      }
    ])
  console.log (todos)


  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <main className='todoWrapper'>
      <section className='todoCard'>
        <h1>To-do App</h1>
        <TodoForm addTodo={addTodo}/>
        <section className="todoItemsContainer">
          {
            todos.map((taskList, index) =>(
              <TodoItems todoTask={taskList} key= {index} deleteTask = {deleteTodo}/>

            )) 
          }
        </section>
      </section>
    
    </main>
  )
}