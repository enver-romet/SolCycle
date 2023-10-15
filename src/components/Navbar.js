import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">SolCycle</Link>
            </div>
            <div>
                <Link to="/marketplace">Marketplace</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/recycle">Recycle</Link>
            </div>
        </nav>
    );
}

export default Navbar;
