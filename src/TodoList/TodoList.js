import React from 'react';
import Task from './Task'
import TaskInput from './TaskInput'
import './TodoList.scss'


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { id: 0, title: 'Task 1', done: false },
                { id: 1, title: 'Task 2', done: true },
                { id: 2, title: 'Task 3', done: false },
            ]
        }
    }

    addTask = task => {
        this.setState(state => {
            let { tasks } = state;
            tasks.push({
                id: tasks.length !== 0 ? tasks.length : 0,
                title: task,
                done: false,
            })
            return tasks
        })
    }

    doneTask(id) {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let { tasks } = state;
            tasks[index].done = true;
            return tasks
        })
    }

    deleteTask(id) {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let { tasks } = state;
            delete tasks[index];
            return tasks
        })
    }

    render() {
        const { tasks } = this.state;
        const activeTasks = tasks.filter(task => !task.done);
        const doneTasks = tasks.filter(task => task.done);

        return (
            <div className='container'>
                <div className='top'>Active tasks: {activeTasks.length}</div>
                {[...activeTasks, ...doneTasks].map(task =>
                    <Task doneTask={() => this.doneTask(task.id)}
                        deleteTask={() => this.deleteTask(task.id)}
                        task={task}
                        key={task.id}>
                    </Task>)}
                <TaskInput addTask={this.addTask}></TaskInput>
            </div>
        )
    }
}

export default TodoList;