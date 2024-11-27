import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <header>
            <h1>Project Management</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
}
