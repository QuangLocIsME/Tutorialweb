import React from 'react';
import Tron from './Tron';
import Line from './Line';

function TonghopTronLine() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: 'clamp(250px, 40vw, 400px)',
            padding: 'clamp(15px, 2vw, 30px)',
            border: '2px solid #ffd700',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            margin: '1rem'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
            }}>
                <Tron />
                <Line />
                <Line />
                <Line />
            </div>
        </div>
    );
}

export default TonghopTronLine;
