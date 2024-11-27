import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import '../../css/ProjectList.css';

export default function ProjectList() {
    const [yourProjects, setYourProjects] = useState([]);
    const [otherProjects, setOtherProjects] = useState([]);

    useEffect(() => {
        // API-запрос для получения проектов
        fetch('/api/projects')
            .then((res) => res.json())
            .then((data) => {
                // Распределяем проекты по категориям
                setYourProjects(data.createdProjects || []);
                setOtherProjects(data.joinedProjects || []);
            })
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div className="project-container">
            {/* Колонка с собственными проектами */}
            <div className="project-column">
                <h2>Your Projects</h2>
                {yourProjects.length > 0 ? (
                    yourProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <p>No projects found.</p>
                )}
            </div>

            {/* Колонка с проектами, к которым присоединился */}
            <div className="project-column">
                <h2>Other Projects</h2>
                {otherProjects.length > 0 ? (
                    otherProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <p>No projects found.</p>
                )}
            </div>
        </div>
    );
}
