import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.navbar')) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="navbar">
            <div className="toggle" onClick={handleToggle}>
                &#x25BC;
            </div>
            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <li><Link smooth to="/" onClick={handleClose}>Presentation</Link></li>
                <li><Link smooth to="/tools" onClick={handleClose}>Tools</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;