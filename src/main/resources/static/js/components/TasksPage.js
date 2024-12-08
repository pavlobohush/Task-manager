import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../../css/TasksPage.css";

export default function TasksPage() {
    const { projectId } = useParams(); // Получаем projectId из URL
    const [tasks, setTasks] = useState([]);
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch(`/api/projects/${projectId}`)
            .then((res) => res.json())
            .then((data) => setProject(data))
            .catch((error) => console.error("Error fetching project:", error));

        fetch(`/api/tasks/project/${projectId}`)
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error("Error fetching tasks:", error));
    }, [projectId]);

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;

        if (!destination) return; // Если перемещение произошло за пределы допустимых зон, ничего не делаем.

        // Проверка на попытку переместить в ту же колонку
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        // Получаем текущую задачу
        const task = tasks.find((t) => t.id.toString() === draggableId);

        if (!task) return; // Если задача не найдена, ничего не делаем.

        // Ограничиваем перемещение: NOT_STARTED → IN_PROGRESS и IN_PROGRESS → COMPLETED
        const validTransitions = {
            NOT_STARTED: ["IN_PROGRESS"],
            IN_PROGRESS: ["COMPLETED"],
        };

        const allowedDestinations = validTransitions[task.status] || [];

        if (!allowedDestinations.includes(destination.droppableId)) {
            return; // Если перемещение в недопустимый статус, ничего не делаем.
        }

        // Обновляем локальное состояние
        const updatedTasks = tasks.map((t) =>
            t.id === task.id ? { ...t, status: destination.droppableId } : t
        );
        setTasks(updatedTasks);

        // Обновляем статус задачи на сервере
        fetch(`/api/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...task, status: destination.droppableId }),
        }).catch((error) => console.error("Error updating task:", error));
    };

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
