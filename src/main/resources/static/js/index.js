import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import useAuth from "./components/useAuth.js";
import Layout from "./components/Layout.js";

const ProjectList = React.lazy(() => import("./components/ProjectList.js"));
const CreateProject = React.lazy(() => import("./components/CreateProject.js"));
const TasksPage = React.lazy(() => import("./components/TasksPage.js"));
const AddTask = React.lazy(() => import("./components/AddTask.js"));

function AppRoutes() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div>Checking authentication...</div>;
    }

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Layout />}>
                <Route path="/projects" element={isAuthenticated ? <ProjectList /> : <Navigate to="/login" />} />
                <Route path="/projects/new" element={isAuthenticated ? <CreateProject /> : <Navigate to="/login" />} />
                <Route path="/projects/:projectId/tasks" element={isAuthenticated ? <TasksPage /> : <Navigate to="/login" />} />
                <Route path="/projects/:projectId/tasks/new" element={isAuthenticated ? <AddTask /> : <Navigate to="/login" />} />
            </Route>
        </Routes>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Suspense fallback={<div className="loading">Loading...</div>}>
            <AppRoutes />
        </Suspense>
    </Router>
);
