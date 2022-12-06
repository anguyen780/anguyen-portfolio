import React from 'react';
import './styles/Navbar.css';

function Navbar({currentPage, pageChange}) {
    return <div className='navbar navbar-expand-lg navbar-dark bg-dark p-4'>

        <div className='container-fluid navbar navbar-expand-lg navbar-dark bg-dark p-4'>
            <nav className='navbar-collapse justify-content-center'>
                <a className='px-5 text-white nav-link about-link' href='#about-me' onClick={() => pageChange('About')}>About Me</a>
                <a className='px-5 text-white nav-link port-link' href='#portfolio' onClick={() => pageChange('Portfolio')}>Portfolio</a>
                <a className='px-5 text-white nav-link contact-link' href='#contact-me' onClick={() => pageChange('Contact')}>Contact Me</a>
                <a className='px-5 text-white nav-link resume-link' href='https://docs.google.com/document/d/1xUcK6df5g5Yr0jknCxStE4hnpbcLNfY2sBPJ9jFrBG8/edit?usp=sharing' target={'blank'}>Resume</a>
            </nav>
        </div>

    </div>
}

export default Navbar;