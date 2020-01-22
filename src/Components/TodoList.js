import React from 'react'


export const TodoList = ({ newNotes, setNoteState }) => {
    function removeNote(id) {
        setNoteState({
            notes: newNotes.filter(note => note.id !== id)
        })
        console.log(id)
        console.log(newNotes)
        
    }
 
    return (
        <ul className="list-group">
            {newNotes.map(note =>
                <li key={note.id} className={'list-group-item note'}>
                    <div>
                        
                        <strong>{note.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>

                    </div>
                    <button className='btn btn-outline-danger' onClick={() => removeNote(note.id)}
                    >&times;
                    </button>
                </li>
            )
            }
        </ul >
    )
}