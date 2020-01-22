import React, { useState, useContext, useEffect } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import localStorage from 'lockr'
import randomKey from 'random-key-generator'


export const Form = ({ notes, setUpdateNotes }) => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            let newNotes = [...notes, { id: randomKey(5), title: value, done: false }]
            
            localStorage.set('notes', {notes: newNotes})         
            setUpdateNotes({ notes: newNotes }) 
            alert.show(" The note was created", 'success')
            setValue('')
        } else {
            alert.show(' Enter your note')
        }

    }

    useEffect(() => {
        const saveFormDate = localStorage.get('notes')
        if (saveFormDate) {
            setUpdateNotes(saveFormDate)
        }
    }, [setUpdateNotes])


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