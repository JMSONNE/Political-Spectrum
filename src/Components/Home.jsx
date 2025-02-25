import React from 'react'
import { useState, useEffect } from 'react';

export const Home = ({ handleStart }) => {




    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <h1 style={{ padding: '1rem', fontFamily: 'roboto', borderBottom: '1px solid black', textAlign: 'center' }}>
                Welcome to the Political Spectrum test!
            </h1>

            <p style={{ textAlign: 'center', padding: '1rem', fontSize: '20px', fontFamily: 'roboto', margin: '3rem' }}>
                The Political Spectrum Test asks questions about your personal beliefs and scores your answers
                on a 2-axis spectrum.
            </p>

            <p style={{ textAlign: 'center', padding: '1rem', fontSize: '20px', fontFamily: 'roboto' }}>
                Once you are ready to begin click the start button below:
            </p>

            <button onClick={handleStart} style={{ width: '10vw', alignSelf: 'center', margin: '3rem' }}>
                Start
            </button>
        </div>
    )
}
