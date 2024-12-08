import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ProjectList = React.lazy(() => import("./components/ProjectList"));
const CreateProject = React.lazy(() => import("./components/CreateProject"));
const TasksPage = React.lazy(() => import("./components/TasksPage"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/projects/new" element={<CreateProject />} />
                <Route path="/projects/:projectId/tasks" element={<TasksPage />} />
            </Routes>
        </Suspense>
    </Router>
);

