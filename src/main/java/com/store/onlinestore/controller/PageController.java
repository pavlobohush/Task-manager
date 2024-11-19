package com.store.onlinestore.controller;

import com.store.onlinestore.model.Project;
import com.store.onlinestore.model.Task;
import com.store.onlinestore.service.ProjectService;
import com.store.onlinestore.service.UserService;
import com.store.onlinestore.service.TaskService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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

    @GetMapping
    public String listProjects(Model model) {
        Long currentUserId = userService.getCurrentUserId();
        List<Project> projects = projectService.getProjectsByUserId(currentUserId);
        model.addAttribute("projects", projects);
        return "projects";
    }

    @GetMapping("/new")
    public String createProjectForm(Model model) {
        model.addAttribute("project", new Project());
        return "create_project";
    }

    @GetMapping("/{projectId}/tasks")
    public String listTasks(@PathVariable Long projectId, Model model) {
        List<Task> tasks = taskService.getTasksByProjectId(projectId);
        Project project = projectService.getProjectById(projectId);
        model.addAttribute("project", project);
        model.addAttribute("tasks", tasks);
        return "tasks";
    }

    @GetMapping("/tasks/new")
    public String createTaskForm(@RequestParam Long projectId, Model model) {
        model.addAttribute("projectId", projectId);
        model.addAttribute("task", new Task());
        return "create_task";
    }

    @PostMapping
    public String createProject(@ModelAttribute Project project) {
        Long currentUserId = userService.getCurrentUserId();
        project.setUser(userService.findUserById(currentUserId));
        Project savedProject = projectService.createProject(project);


        return "redirect:/projects";
    }

}
