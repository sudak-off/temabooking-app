import './navbar.scss';

import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Temabooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}
