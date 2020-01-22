import React, { Fragment, useState } from 'react'
import { Form } from '../Components/Form'
import { TodoList } from '../Components/TodoList'


const notes = new Array(3).fill('').map((_, i) => ({ id: i, title: `Note ${i + 1}`, done: false }))
export const Home = () => {
    const [newNotes, setUpdateNotes] = useState({ notes })

    return (
        <Fragment>
            <Form notes={newNotes.notes} setUpdateNotes={setUpdateNotes} />
            <hr />
            <TodoList newNotes={newNotes.notes} setNoteState={setUpdateNotes}  />
        </Fragment>
    )
}