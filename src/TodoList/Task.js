import React from 'react'

function Task({ task, ...props }) {
    const ActionBtn = () =>
        <div>{!task.done ? <p className='check' onClick={props.doneTask}>✔️</p> : <p className='check' onClick={props.deleteTask}>❌</p>}</div>

    const className = 'task ' + (task.done ? 'task-done' : '')

    return (
        <div className={className}>
            <p>{task.title}</p>
            <ActionBtn />
        </div>
    )
}

export default Task