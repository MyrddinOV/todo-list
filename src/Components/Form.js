import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'


export const Form = ({ notes, setUpdateNotes }) => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            const newNotes = [...notes, { id: notes.length, title: value, done: false }]

            setUpdateNotes({ notes: newNotes })

            alert.show(" The note was created", 'success')
            setValue('')
        } else {
            alert.show(' Enter your note')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Enter ToDo'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}