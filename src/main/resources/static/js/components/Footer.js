import React from 'react';
import '../../css/Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {currentYear} Project Management App</p>
        </footer>
    );
}
