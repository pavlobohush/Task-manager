import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard.js';
import apiClient from './apiClient.js';
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
            {projects && projects.length > 0 ? (
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
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = () => {
            const token = localStorage.getItem("token");
            apiClient
                .get('/projects', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    console.log('Fetched projects:', response.data);
                    setYourProjects(response.data.createdProjects || []);
                    setOtherProjects(response.data.joinedProjects || []);
                })
                .catch((error) => {
                    console.error('Error fetching projects:', error.response?.data || error.message);
                    setError('Unable to load projects. Please try again.');
                });
        };
        fetchProjects();
    }, []);

    const handleCreateProject = () => {
        navigate('/projects/new');
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
