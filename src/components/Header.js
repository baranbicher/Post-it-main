import React from 'react';
import Navbar from './Navbar';
import Textarea from './Textarea';
import NotsGroup from './NotsGroup';

function Header() {
    return (
        <div>
            <Navbar />
            <Textarea />
            <NotsGroup/>
        </div>
    )
}

export default Header
