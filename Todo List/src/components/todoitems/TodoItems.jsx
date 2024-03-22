import { useState } from 'react'
import './TodoItems.css'

export const TodoItems = ({ todoTask, deleteTask }) => {

  const [editing, setEditing] = useState(false) 
  return (
    
    <section className='task'>

        {!editing && <p>{todoTask.task}</p>}
        {editing && <input type="text" value={todoTask.task} autoFocus />} 

        <section>
            <span className='span1' onClick={() => setEditing(prevVal => !prevVal)}>🖊️</span>
            
            <span className='span2' onClick={() => deleteTask(todoTask.id)}>🗑️</span>
        </section>

    </section>
  )
}
