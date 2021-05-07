import React from 'react'
import Task from './Task'


function Tasks({task , onDelete, onToggle}) {
    return (
        <div>
            {task.map(task => <Task key={task.id} task={task} onDelete= {onDelete} onToggle={onToggle}/>)}
        </div>
    )
}

export default Tasks
