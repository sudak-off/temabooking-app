import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

import './navbar.scss';

export const Navbar = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to='/' className="linkLogo">
                    <span className="logo">Temabooking</span>
                </Link>
                {user ? user.username : (<div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>)}
            </div>
        </div>
    )
}
