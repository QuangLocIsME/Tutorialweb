import React from 'react';

function Line() {
    return (
        <div style={{
            width: '100%',
            height: 'clamp(8px, 1.5vw, 15px)',
            backgroundColor: '#ff6b4a',
            margin: '5px 0',
            borderRadius: '5px'
        }}></div>
    );
}

export default Line;
