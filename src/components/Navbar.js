import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { filterNote } from '../redux/notes/notesSlice';

function Navbar() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSubmit = (text) => {
        text.preventDefault();
        setSearch(text);

        dispatch(filterNote(search));

        setSearch("");
    }

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span></span>
                    <a className="navbar-brand">Post-it</a>
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={search}
                            onChange={(e)=> setSearch(e.target.value)}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
