import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './Navbar'
import BodySection from './BodySection';



export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const pageChange = (page) => setCurrentPage(page);

    return (
        <div>

            <header>
                <Navbar currentPage={currentPage} pageChange={pageChange} />
            </header>
            <div>
                <BodySection currentPage={currentPage} />
            </div>
            <div>
                {renderPage()}
            </div>
        </div>
    )

}