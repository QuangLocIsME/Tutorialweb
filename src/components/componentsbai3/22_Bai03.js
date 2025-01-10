import React from 'react';
import HinhChuNhat from "./Hinhchunhat";
import HinhVuong from "./Vuong";
import TonghopTronLine from "./TonghopTronLine";

function Ketqua() {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#663399',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            boxSizing: 'border-box',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            <div style={{
                width: '90%',
                flex: '1',
                maxHeight: '30vh',
                minHeight: '150px'
            }}>
                <HinhChuNhat />
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(20px, 4vw, 60px)',
                flex: '2',
                width: '90%',
                flexWrap: 'wrap'
            }}>
                <TonghopTronLine />
                <TonghopTronLine />
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(30px, 3vw, 50px)',
                flex: '1',
                width: '90%',
                marginBottom: '2rem',
                flexWrap: 'wrap'
            }}>
                <HinhVuong />
                <HinhVuong />
                <HinhVuong />
            </div>
        </div>
    );
}

export default Ketqua;