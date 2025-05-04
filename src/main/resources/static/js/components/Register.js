import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import apiClient from "./apiClient.js";
import "../../css/Auth.css";

export default function Register() {
    const [formData, setFormData] = useState({ username: "", password: "", role: "USER" });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Use apiClient for the registration request
            await apiClient.post("/auth/register", formData);
            setSuccess("Registration successful! Redirecting to login...");
            setTimeout(() => navigate("/login"), 3000);
        } catch (error) {
            // Handle errors returned from the server
            if (error.response && error.response.data) {
                setError(error.response.data.message || "Registration failed");
            } else {
                setError("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div className="auth-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="auth-form">
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
}
