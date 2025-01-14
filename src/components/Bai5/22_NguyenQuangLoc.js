import React from 'react'

function Baiktra({ name, detail: { age, address } }) {
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Address: {address}</p>
        </div>
    );
}

function Info() {
    return (
        <Baiktra
            name="Loc"
            detail={{
                age: 20,
                address: "Ho Chi Minh"
            }}
        />
    );
}

export { Info };