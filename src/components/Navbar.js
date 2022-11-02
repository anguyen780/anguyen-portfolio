import React from 'react';

function Navbar() {
    return <div className='navbar navbar-expand-lg navbar-dark bg-dark p-4'>
        
        <div className='container-fluid links'>
            <div className='navbar-collapse justify-content-center'>
                <a className='px-5 text-white nav-link' href='/'>About Me</a>
                <a className='px-5 text-white nav-link' href='/'>Portfolio</a>
                <a className='px-5 text-white nav-link' href='/'>Contact Me</a>
                <a className='px-5 text-white nav-link' href='/'>Resume</a>
            </div>
        </div>

    </div>
}

export default Navbar;