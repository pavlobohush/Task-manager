import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import apiClient from "./apiClient.js";
import "../../css/TasksPage.css";

export default function TasksPage() {
    const { projectId } = useParams();
    const [tasks, setTasks] = useState([]);
    const [project, setProject] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");

        apiClient
            .get(`/projects/${projectId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => setProject(response.data))
            .catch((error) => console.error("Error fetching project:", error));

        apiClient
            .get(`/tasks/project/${projectId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => setTasks(response.data))
            .catch((error) => console.error("Error fetching tasks:", error));
    }, [projectId]);


    // Handle drag and drop
    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;

        if (!destination) return;
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        const task = tasks.find((t) => t.id.toString() === draggableId);
        if (!task) return;

        // Define valid transitions for task statuses
        const validTransitions = {
            NOT_STARTED: ["IN_PROGRESS"],
            IN_PROGRESS: ["COMPLETED"],
        };

        const allowedDestinations = validTransitions[task.status] || [];
        if (!allowedDestinations.includes(destination.droppableId)) {
            return;
        }

        const updatedTasks = tasks.map((t) =>
            t.id === task.id ? { ...t, status: destination.droppableId } : t
        );
        setTasks(updatedTasks);

        // Update task status on the server
        apiClient
            .put(
                `/tasks/${task.id}`,
                {
                    ...task,
                    status: destination.droppableId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            )
            .catch((error) => console.error("Error updating task:", error));
    };

    // Filter tasks by status
    const filteredTasks = {
        NOT_STARTED: tasks.filter((task) => task.status === "NOT_STARTED"),
        IN_PROGRESS: tasks.filter((task) => task.status === "IN_PROGRESS"),
        COMPLETED: tasks.filter((task) => task.status === "COMPLETED"),
    };

    return (
        <div className="tasks-page">
            <h1>Tasks for project: {project.name}</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="tasks-container">
                    {["NOT_STARTED", "IN_PROGRESS", "COMPLETED"].map((status) => (
                        <Droppable droppableId={status} key={status}>
                            {(provided) => (
                                <div
                                    className="tasks-column"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <h2>
                                        {status.replace("_", " ")} (
                                        {filteredTasks[status].length})
                                    </h2>
                                    {filteredTasks[status].length > 0 ? (
                                        filteredTasks[status].map((task, index) => (
                                            <Draggable
                                                key={task.id}
                                                draggableId={task.id.toString()}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        className="task-card"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <h3>{task.title}</h3>
                                                        <p>{task.description}</p>
                                                        <p>Due: {task.dueDate}</p>
                                                        <p>Priority: {task.priority}</p>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))
                                    ) : (
                                        <p>No tasks in this status.</p>
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>
            <a
                href={`/projects/${projectId}/tasks/new`}
                className="btn btn-success"
            >
                Add Task
            </a>
        </div>
    );
}
