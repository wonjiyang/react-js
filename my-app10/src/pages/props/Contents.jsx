import React from 'react';

function Contents({isDark}) {

    const contentsCss = {
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black'
    }

    return (
        <>
            <main className='content' style={contentsCss}>
                <h3>좋은 하루 보내세요</h3>
            </main>
        </>
    );
}

export default Contents;