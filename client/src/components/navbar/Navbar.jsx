import { Link } from 'react-router-dom'

import './navbar.scss';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to='/' className="linkLogo">
                    <span className="logo">Temabooking</span>
                </Link>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}
