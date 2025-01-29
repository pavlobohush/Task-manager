import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "./apiClient.js";
import "../../css/CreateProject.css";

export default function CreateProject() {
    const [formData, setFormData] = useState({ name: "", description: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token"); // Получаем токен из localStorage
            await apiClient.post("/projects", formData, {
                headers: {
                    Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
                },
            });
            navigate("/projects");
        } catch (error) {
            console.error("Error creating project:", error);
            alert("Failed to create project. Please try again.");
        }
    };


    return (
        <div className="create-project-container">
            <h1>Create New Project</h1>
            <form onSubmit={handleSubmit} className="create-project-form">
                <div className="form-group">
                    <label htmlFor="name">Project Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Project Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-success">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}
