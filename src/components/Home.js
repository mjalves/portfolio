import React from 'react';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import './Home.css'; 

function Home() {
    return (
        <>
            <div className="container">
                <div className='home-wrapper'>
                    <div className='banner-content'>
                        <h1 className='title'>Hello!</h1>
                        <h1 className='line-1 anim-typewriter'>I'm a Software Developer</h1>
                        <p className='para'>
                            I'm passionate about coding and technology.
                        </p>
                    </div>
                    <video src='/Videos/laptop.mp4' autoPlay loop muted />
                </div>
            </div>
            <About />
            <Projects />
            <Resume />
            <Contact />
        </>
                
    )

}




export default Home
