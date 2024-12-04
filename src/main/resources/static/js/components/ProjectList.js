import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import '../../css/ProjectList.css';

function ProjectColumn({ title, projects, emptyMessage, onCreate }) {
    return (
        <div className="project-column">
            <div className="column-header">
                <h2>{title}</h2>
                {onCreate && (
                    <button className="btn create-project-btn" onClick={onCreate}>
                        Create Project
                    </button>
                )}
            </div>
            {projects.length > 0 ? (
                projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))
            ) : (
                <p>{emptyMessage}</p>
            )}
        </div>
    );
}

export default function ProjectList() {
    const [yourProjects, setYourProjects] = useState([]);
    const [otherProjects, setOtherProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/projects')
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch projects");
                }
                return res.json();
            })
            .then((data) => {
                setYourProjects(data.createdProjects || []);
                setOtherProjects(data.joinedProjects || []);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setError("Failed to load projects. Please try again later.");
            });
    }, []);

    const handleCreateProject = () => {
        window.location.href = '/projects/new';
    };

    return (
        <div className="project-container">
            {error && <p className="error-message">{error}</p>}
            <ProjectColumn
                title="Your Projects"
                projects={yourProjects}
                emptyMessage="No projects found."
                onCreate={handleCreateProject}
            />
            <ProjectColumn
                title="Other Projects"
                projects={otherProjects}
                emptyMessage="No projects found."
            />
        </div>
    );
}
