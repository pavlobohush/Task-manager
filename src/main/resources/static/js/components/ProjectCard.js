import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/ProjectCard.css';

export default function ProjectCard({ project }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/projects/${project.id}/tasks`);
    };

    return (
        <div className="project-card" onClick={handleCardClick}>
            <h3>{project.name}</h3>
        </div>
    );
}
