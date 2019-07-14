import React from 'react';
import { Link } from 'react-router-dom';


const StreamList = () => {
    return (
        <div>StreamList
        <Link to="/streams/new">Create</Link>
        <br />
        <Link to="/streams/edit">edit</Link>
        <br />
        <Link to="/streams/delete">delete</Link>
        <br />
        <Link to="/streams/show">show</Link>
        <br />

        </div>
    )
}

export default StreamList;