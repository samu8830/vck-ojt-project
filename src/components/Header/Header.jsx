import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <div>
            <header className='navbar'>
                <h3>Vivekanand College</h3>
                <nav className='nav'>
                    <Link className='nav-links' to="/">Home</Link>
                    <Link className='nav-links' to="/about">About</Link>
                    <Link className='nav-links' to="/courses">Courses</Link>
                    <Link className='nav-links' to="/contact">Contact</Link>
                    <button > <Link style={{ color: 'green', textDecoration: 'none' }} to='/admissions'>Apply Now!</Link></button>
                    <button className="hamburger" onClick={toggleMenu}>
                        ☰
                    </button>
                </nav>

                <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
                    <nav>
                    <Link to="/" onClick={closeMenu} className="mobile-link">Home</Link>
                    <Link to="/about" onClick={closeMenu} className="mobile-link">About</Link>
                    <Link to="/courses" onClick={closeMenu} className="mobile-link">Courses</Link>
                    <Link to="/contact" onClick={closeMenu} className="mobile-link">Contact</Link>
                    <Link to="/apply" onClick={closeMenu} className="mobile-apply">Apply Now!</Link>
                    </nav>
                </div>
            
        </header>
        </div >
    );
};
export default Header;

