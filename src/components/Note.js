import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"

import { useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../redux/notes/notesSlice';

import EditNote from './EditNote';

const Note = (props) => {
    const dispatch = useDispatch();
    const { id, title, color, item, fullDate } = props
    

    return (
        <div>
            <div className="col ">
                <div className={`card row-cols-auto text-bg-${color} mb-3`} style={{ width: "400px" }}>
                    <div className="card-header card-footer position-relative" style={{ width: "auto", height: "50px" }}>
                        <span className="position-absolute top-50 start-0 translate-middle-y ms-2">{title}</span>
                        <button
                            id={id}
                            type="button"
                            className="btn-close me-2"
                            style={{ position: "absolute", right: "0" }}
                            aria-label="Close"
                            onClick={() => dispatch(deleteNote(id))}
                        ></button>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{item}</p>
                    </div>
                    <div className="card-footer position-relative" style={{ width: "auto", height: "50px" }}>
                        <span className="position-absolute top-50 start-0 translate-middle-y ms-2">{fullDate}</span>
                        <button
                            type="button"
                            className="btn position-absolute top-50 end-0 translate-middle-y" style={{ border: "none" }}
                            
                            data-bs-toggle="modal" 
                            data-bs-target="#editModal"
                            onClick={() => dispatch(editNote(id))}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <EditNote props={props}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note

/**
<EditNote id={id}/>
 */
