import React, { useEffect, useState } from "react";
import "../../css/TasksPage.css";
import { useParams } from "react-router-dom";

export default function TasksPage() {
    const { projectId } = useParams(); // Получаем projectId из URL
    const [tasks, setTasks] = useState([]);
    const [project, setProject] = useState({});

    useEffect(() => {
        // Загружаем проект по ID
        fetch(`/api/projects/${projectId}`)
            .then((res) => res.json())
            .then((data) => setProject(data))
            .catch((error) => console.error("Error fetching project:", error));

        // Загружаем задачи по ID проекта
        fetch(`/api/tasks/project/${projectId}`)
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error("Error fetching tasks:", error));
    }, [projectId]);

    const notStarted = tasks.filter(task => task.status === "NOT_STARTED");
    const inProgress = tasks.filter(task => task.status === "IN_PROGRESS");
    const completed = tasks.filter(task => task.status === "COMPLETED");

    return (
        <div className="tasks-page">
            <h1>Tasks for project: {project.name}</h1>
            <div className="tasks-container">
                <div className="tasks-column">
                    <h2>Not Started ({notStarted.length})</h2>
                    {notStarted.length > 0 ? (
                        notStarted.map(task => (
                            <div key={task.id} className="task-card">
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                                <p>Due: {task.dueDate}</p>
                                <p>Priority: {task.priority}</p>
                            </div>
                        ))
                    ) : (
                        <p>No tasks in this status.</p>
                    )}
                </div>
                <div className="tasks-column">
                    <h2>In Progress ({inProgress.length})</h2>
                    {inProgress.length > 0 ? (
                        inProgress.map(task => (
                            <div key={task.id} className="task-card">
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                                <p>Due: {task.dueDate}</p>
                                <p>Priority: {task.priority}</p>
                            </div>
                        ))
                    ) : (
                        <p>No tasks in this status.</p>
                    )}
                </div>
                <div className="tasks-column">
                    <h2>Completed ({completed.length})</h2>
                    {completed.length > 0 ? (
                        completed.map(task => (
                            <div key={task.id} className="task-card">
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                                <p>Due: {task.dueDate}</p>
                                <p>Priority: {task.priority}</p>
                            </div>
                        ))
                    ) : (
                        <p>No tasks in this status.</p>
                    )}
                </div>
            </div>
            <a href={`/projects/${projectId}/tasks/new`} className="btn btn-success">Add Task</a>
        </div>
    );
}
