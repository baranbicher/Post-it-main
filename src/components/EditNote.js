import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { editNote, changeEditNote } from '../redux/notes/notesSlice';

function EditNote() {
    const dispatch = useDispatch();
    const [editTitle, setEditTitle] = useState("");
    const [editItem, setEditItem] = useState("");

    const editItems = useSelector((state) => state.notes.editNote)

    const handleEdit = (e) => {
        e.preventDefault();

        dispatch(changeEditNote({editTitle, editItem}))

        setDefault()
    }

    const setDefault = () => {
        setEditItem("");
        setEditTitle("");
    }

    return (
        <div>
            <div className="modal fade " id="editModal" tabIndex="-1" aria-labelledby="editModalLabel " aria-hidden="true">
                <div className="modal-dialog ">
                    <div className={`modal-content card text-bg-${editItems.color}`}>
                        <div className={`modal-header card text-bg-${editItems.color}`}>
                            <h1 className={`modal-title fs-5 card text-bg-${editItems.color}`} id="editModalLabel" style={{ border: "none" }}>Edit Note {editItems.title}</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="recipient-name"
                                        className={`col-form-label card text-bg-${editItems.color}`}
                                        style={{ border: "none" }}>Title:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                        value={editTitle}
                                        placeholder={`${editItems.title}`}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="message-text"
                                        className={`col-form-label card text-bg-${editItems.color}`}
                                        style={{ border: "none" }}>Note:</label>
                                    <textarea
                                        className="form-control"
                                        id="message-text"
                                        value={editItem}
                                        placeholder={`${editItems.item}`}
                                        onChange={(e) => setEditItem(e.target.value)}
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-dark"
                                data-bs-dismiss="modal"
                                onClick={setDefault}
                            >Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-dark"
                                onClick={handleEdit}
                                data-bs-dismiss="modal"
                            >Save Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditNote
