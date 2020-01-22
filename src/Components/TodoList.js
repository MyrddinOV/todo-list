import React from 'react'
import localStorage from 'lockr'



export const TodoList = ({ newNotes, setNoteState }) => {

    function isDone(id) {
        setNoteState({
            notes: newNotes.map(note => {
                if (note.id === id) {
                    note.done = !note.done
                }
                return note
            })
        })
    }

    function removeNote(id) {
        const filteredForRemuve = {
            notes: newNotes.filter(note => note.id !== id)
        }
        setNoteState(filteredForRemuve)
        localStorage.set('notes', filteredForRemuve)
    }

    function clearNotes() {
        setNoteState({ notes: [] })
        localStorage.set('notes', { notes: [] })
        console.log(newNotes)
    }

    return (
        <>
            <ul className="list-group">
                {newNotes.map(note =>
                    <li key={note.id} className={'list-group-item note '}>
                        <div className='d-flex align-items-center'>
                            <input className='mr-2 checkbox' type='checkbox' checked={note.done} onChange={() => isDone(note.id)} />
                            <strong className={note.done ? 'done' : ''}>{note.title}</strong>

                            <small className={note.done ? 'done' : ''}>{new Date().toLocaleDateString()}</small>

                        </div>
                        <button className={note.done ? 'btn btn-outline-danger' : 'd-none'} onClick={() => { removeNote(note.id) }}
                        >&times;
                    </button>
                    </li>
                )
                }
            </ul >

            <button onClick={clearNotes}>Clear notes</button>
        </>
    )
}