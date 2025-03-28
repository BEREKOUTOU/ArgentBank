import React from 'react';
import '../styles/Components/Banner.css';

function Banner () {
    return (
        <div className='banner'>
            <section className='introduction'>
                <h2 className='sr-only'>Promoted Content</h2>
                <p className='subtitle'>No fees.<br />No minimum deposit.<br />High interest rates.</p>
                <p className='text'>Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

export default Banner