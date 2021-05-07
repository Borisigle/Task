import React from 'react'

function Button({toggleAdd, showAdd}) {
    return (
        <div>
            <button className='btn' onClick={toggleAdd} style={showAdd ? {backgroundColor:'red'} : {backgroundColor:'green'}}>
            {showAdd ? 'Close' : 'Add'}</button>               
        </div>
    )
}

export default Button
