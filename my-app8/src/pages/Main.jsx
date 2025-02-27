import React from 'react';
import {Link} from 'react-router-dom';

function Main(props) {
    return (
        <>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
            </ul>
        </>
    );
}

export default Main;