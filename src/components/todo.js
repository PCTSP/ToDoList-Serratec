import {Trash} from 'phosphor-react'

import React, {useState} from 'react'
import Form from './form'

function Todo({tasks, completeTask, removeTask}) {

  return tasks.map((task, index) => (
    <div className={task.isComplete ? 'task-row complete' : 'task-row'} key={index}>

      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>

      <div className="icons">
        <Trash size={24}  onClick={() => removeTask(task.id)} className='delete-icon'/>
      </div>
    </div>
  ))
}

export default Todo