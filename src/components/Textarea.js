import { useState } from 'react';

import { addNote } from '../redux/notes/notesSlice';
import { useDispatch } from 'react-redux';

import { nanoid } from '@reduxjs/toolkit';


function Textarea() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [item, setItem] = useState("");
    const [color, setColor] = useState("primary");



    const handleSubmit = (e) => {
        if (!title) return;
        e.preventDefault();

        const fullDate = setYear();

        dispatch(addNote({ id: nanoid(), item, title, color, fullDate }));

        setTitle("");
        setItem("");
        setColor("primary")
    };

    const setYear = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        const fullDate = `${day}.${month}.${year}`;
        return fullDate
    }

    return (
        <div>
            <div className="form-floating m-5 px-5" >
                <div>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        className="form-control"
                        placeholder="Leave your note here" id="floatingTextarea2"
                        style={{ height: "100px" }}
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    ></textarea>
                </div>
                <div className='d-flex justify-content-between' style={{ padding: 5, border: "1px solid #dee2e6" }}>

                    <div>
                        <button
                            type="button"
                            className="btn btn-primary rounded-circle d-inline p-2 me-1"
                            onClick={() => setColor("primary")}
                        ></button>
                        <button
                            type="button"
                            className="btn btn-secondary rounded-circle d-inline p-2 me-1"
                            onClick={() => setColor("secondary")}

                        ></button>
                        <button
                            type="button "
                            className="btn btn-success rounded-circle d-inline p-2 me-1"
                            onClick={() => setColor("success")}
                        ></button>
                        <button
                            type="button"
                            className="btn btn-danger rounded-circle d-inline p-2 me-1"
                            onClick={() => setColor("danger")}
                        ></button>
                        <button
                            type="button"
                            className="btn btn-warning rounded-circle d-inline p-2 me-1"
                            onClick={() => setColor("warning")}
                        ></button>
                        <button
                            type="button"
                            className="btn btn-info rounded-circle d-inline p-2 me-1"
                            onClick={() => setColor("info")}
                        ></button>
                        <button
                            type="button"
                            className="btn btn-light rounded-circle d-inline p-2 me-1"
                            onClick={() => setColor("light")}
                        ></button>
                    </div>
                    <span></span>
                    <button
                        className="btn btn-outline-success"
                        type="submit"
                        onClick={handleSubmit}
                        >Add</button>
            </div>
        </div>
        </div >
    )
}

export default Textarea

/**
<input
                        type="color"
                        class="form-control form-control-color"
                        id="exampleColorInput"
                        value="#563d7c"
                        title="Choose your color"
                    ></input>


                    
 */