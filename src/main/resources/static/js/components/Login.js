import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "./apiClient.js";
import useAuth from "./useAuth.js";
import "../../css/Auth.css";

export default function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiClient.post("/auth/login", formData);
            console.log("Response from login:", response);
            const token = response.data.token;
            console.log("Token:", token);
            localStorage.setItem("token", token);

            const validateResponse = await apiClient.get("/auth/validate-token", {
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log("Validation response:", validateResponse);
            if (validateResponse.status === 200) {
                setIsAuthenticated(true);
                console.log("Navigating to /projects...");
                navigate("/projects");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("Login failed. Please check your credentials.");
            localStorage.removeItem("token");
        }
    };

    return (
        <div className="auth-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="auth-form">
                {error && <p className="error-message">{error}</p>}
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
                <button type="submit">Login</button>
            </form>
            <p>
                New user? <a href="/register">Register here</a>
            </p>
        </div>
    );
}
