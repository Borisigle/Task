import React from 'react';
import Button from './Button';

function Header({title, toggleAdd, showAdd}) {

    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button toggleAdd={toggleAdd} showAdd={showAdd}/>
        </div>
    )



}

export default Header
