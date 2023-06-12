import React from 'react';
import { useSelector } from "react-redux";
import Note from './Note';

function NotsGroup() {
    const notes = useSelector((state) => state.notes.filteredNotes);


    return (
        <div>
            <div className="row row-cols-auto g-4" style={{ padding: 80 }}>
                {
                    notes.map((note) => (
                        <Note
                            key={note.id}
                            {...note}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default NotsGroup;
