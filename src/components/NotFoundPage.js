import React from 'react';
import './NotFoundPage.css'

const NotFoundPage = () => (
    <>
    <div className='nfp-container'>
        <div className='wrapper'>
        <div className='not-found'> 
        <h1 className='err'>404</h1>
        <h1>Oh no, did you get lost?</h1>
        <p>Looks like the page you're looking for is not available.</p>
        
        </div>
        <img src="/images/oh-no.png" alt="Jaque" />
        </div>
    </div>
    </>
);

export default NotFoundPage;