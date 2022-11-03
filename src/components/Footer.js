import React from 'react';
import './styles/Footer.css'

const style = {
    footer: {
        
    }
}

function Footer() {
    return <footer style={style.footer} className='container-fluid bg-dark fixed-bottom'>
        <a href='https://github.com/anguyen780' className='github-icon link-light px-3' target={'blank'}><i className="bi bi-github"></i></a>
        <a href='https://www.linkedin.com/in/alex-nguyen-6702a0109/' className='linkedin-icon link-light px-3' target={'blank'}><i className="bi bi-linkedin"></i></a>
    </footer>
}

export default Footer;