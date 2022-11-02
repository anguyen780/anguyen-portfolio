import React from 'react';
import './styles/Navbar.css';

function Navbar() {
    return <div className='navbar navbar-expand-lg navbar-dark bg-dark p-4'>

        <div className='container-fluid navbar navbar-expand-lg navbar-dark bg-dark p-4'>
            <nav className='navbar-collapse justify-content-center'>
                <a className='px-5 text-white nav-link about-link' href='/'>About Me</a>
                <a className='px-5 text-white nav-link port-link' href='/portfolio'>Portfolio</a>
                <a className='px-5 text-white nav-link contact-link' href='/contact-me'>Contact Me</a>
                <a className='px-5 text-white nav-link resume-link' href='/resume'>Resume</a>
            </nav>
        </div>

    </div>
}

export default Navbar;