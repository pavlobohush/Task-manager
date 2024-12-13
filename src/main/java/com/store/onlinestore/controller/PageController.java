package com.store.onlinestore.controller;

import com.store.onlinestore.model.Project;
import com.store.onlinestore.model.Task;
import com.store.onlinestore.service.ProjectService;
import com.store.onlinestore.service.UserService;
import com.store.onlinestore.service.TaskService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;



@Controller
@RequestMapping("/projects")
public class PageController {

    private final ProjectService projectService;

    private final TaskService taskService;

    private final UserService userService;

    public PageController(ProjectService projectService, TaskService taskService, UserService userService) {
        this.projectService = projectService;
        this.taskService = taskService;
        this.userService = userService;
    }
    @GetMapping(value = { "", "/new"})
    public String serveReactApp() {
        return "forward:/projects.html";
    }

    @GetMapping("/{projectId}/tasks")
    public String serveTasksReactPage(@PathVariable Long projectId) {
        return "forward:/projects.html";
    }

    @GetMapping("/{projectId}/tasks/new")
    public String serveCreateTaskReactPage(@PathVariable Long projectId) {
        return "forward:/projects.html";
    }
}
