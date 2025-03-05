import React from 'react';
import '../assets/css/header.css';

function Header(props) {
    return (
        <>
            <header className="header">
                {/* 현재시간 표시 */}
                <h3>{new Date().toDateString()}</h3>
                <h2>Todo List</h2>
            </header>
        </>
    );
}

export default React.memo(Header);