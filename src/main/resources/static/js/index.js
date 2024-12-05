import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./components/ProjectList";
import CreateProject from "./components/CreateProject";
import TasksPage from './components/TasksPage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/new" element={<CreateProject />} />
            <Route path="/projects/:projectId/tasks" element={<TasksPage />} />
        </Routes>
    </Router>
);
