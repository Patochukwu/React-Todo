// import { useState } from 'react'
// import './TodoItems.css'

// export const TodoItems = ({todoTask, deleteTask}) => {

//   const [editing, setEditing] = useState(true)

//   return (
    
//     <section className='task'>

//         {!editing &&<p>{todoTask.task}</p>}
//         {editing &&<input type="" value={todoTask.task} />}

//         <section >
//             <span className='span1' onClick={() => setEditing(prevVal => !prevVal)}>🖊️</span>
            
//             <span className='span2' onClick={() =>deleteTask(todoTask.id)}>🗑️</span>
//         </section>

//     </section>
//   )
// }

import { useState } from 'react'
import './TodoItems.css'

export const TodoItems = ({ todoTask, deleteTask }) => {

  const [editing, setEditing] = useState(false) // Changed to false initially

  return (
    
    <section className='task'>

        {!editing && <p>{todoTask.task}</p>}
        {editing && <input type="text" value={todoTask.task} autoFocus />} {/* Added "text" type and autoFocus */}

        <section>
            <span className='span1' onClick={() => setEditing(prevVal => !prevVal)}>🖊️</span>
            
            <span className='span2' onClick={() => deleteTask(todoTask.id)}>🗑️</span>
        </section>

    </section>
  )
}
