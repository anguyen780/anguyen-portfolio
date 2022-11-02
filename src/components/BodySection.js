import React from 'react';
import bgImg from '../assets/jumbotron-img.jpeg'

const style = {
    bodyImg: {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        height: '450px',
    }
}

function BodySection({currentPage}) {
    console.log(currentPage);
    if (currentPage === 'About'){
    return <div style={style.bodyImg} class="jumbotron">
        <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
                <h1 className="display-3 mb-3">Hi, My Name Is Alex Nguyen.</h1>
                <p className="lead mb-3">Welcome to my portfolio</p>
            </div>
        </div>
    </div>
    }
}

export default BodySection