import React from 'react';

function Vuong() {
    return (
        <div style={{
            width: 'clamp(150px, 20vw, 200px)',
            height: 'clamp(150px, 20vw, 200px)',
            backgroundColor: '#ff9933',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s',
            cursor: 'pointer',
            margin: '1.5rem',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        }}></div>
    );
}

export default Vuong;
