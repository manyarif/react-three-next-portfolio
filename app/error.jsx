'use client';

import React from 'react';

export default function Error({ error, reset }) {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
}
