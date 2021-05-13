import React from 'react';
import './About.css';

const About = () => {
    return(
        <>
        <div className='about-container'>
            <div className='my-photo'>
                <img src="/images/me.jpeg" alt="Jaque" />
            </div>
            <div className='description'>
            <div className='bio'>
                <h1 className='line-1 anim-typewriter'>Hi, I'm Jaque ( Jackie )</h1>
                <p> 
                    I'm a Brazilian Software Developer with entry-level experience living in the Washington DC metropolitan area. 
                    I graduated from Towson University class Fall 2020 majoring in Computer Science.
                    During my senior year I had the oportunity to work at Coras, Inc. as a Software Developer Intern. 
                    The internship strengthened my passion for coding and got me into working with React.Js, which is the frontend framework I used to create this Portfolio.

                </p>
            </div>
            
            <div className='list'>
            <ul>
                <li>Name: </li>
                <li>Age: </li>    
                <li>My pronouns: </li>    
                <li>Address: </li>    
                <li>Phone: </li>        
                <li>E-mail: </li>
            </ul>
            </div>
            <div className='list'>
            <ul>
                <li>Jaque Alves</li>
                <li>It's just a number</li>    
                <li>she/her/hers</li>    
                <li>Washington DC</li>    
                <li>+1 (302) 538-9711</li>        
                <li>alves.jaque@icloud.com </li>
            </ul>
            </div>
            
            </div>
        </div>
       
        </>
    );
}

export default About;