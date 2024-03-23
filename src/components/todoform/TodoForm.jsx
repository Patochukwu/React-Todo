import { useState } from 'react'
import './TodoForm.css'

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim() !== "") {
      addTodo(value)
      setValue('') 
    } else {
      alert("Please write something!")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button>Add Task</button>
    </form>
  )
}
