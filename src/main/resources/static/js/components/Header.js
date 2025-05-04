import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/Header.css';

export default function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token on logout
        navigate('/login'); // Redirect to the login page
    };

    const isLoggedIn = Boolean(localStorage.getItem('token'));

    return (
        <header>
            <h1>Project Management</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {isLoggedIn && <li><Link to="/projects">Projects</Link></li>}
                    {isLoggedIn ? (
                        <li>
                            <button onClick={handleLogout} className="logout-button">Logout</button>
                        </li>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
