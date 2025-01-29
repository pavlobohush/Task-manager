import React from 'react';
import { useNavigate } from 'react-router-dom';
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
                    <li><a href="/">Home</a></li>
                    {isLoggedIn && <li><a href="/projects">Projects</a></li>}
                    {isLoggedIn ? (
                        <li>
                            <button onClick={handleLogout} className="logout-button">Logout</button>
                        </li>
                    ) : (
                        <li><a href="/login">Login</a></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
