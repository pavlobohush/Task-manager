import React from 'react';
import '../../css/ProjectCard.css';

export default function ProjectCard({ project }) {
    return (
        <div
            className="project-card"
            onClick={() => window.location.href = `/projects/${project.name}/tasks`}
        >
            <h3>{project.name}</h3>
        </div>
    );
}
