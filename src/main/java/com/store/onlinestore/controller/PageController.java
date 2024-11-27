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
        return "forward:/projects.html";
    }

    @GetMapping("/new")
    public String createProjectForm(Model model) {
        model.addAttribute("project", new Project());
        return "create_project";
    }

    @GetMapping("/{projectName}/tasks")
    public String listTasks(@PathVariable String projectName, Model model) {
        Long currentUserId = userService.getCurrentUserId();
        Project project = projectService.getProjectByNameAndUserId(projectName, currentUserId);
        List<Task> tasks = taskService.getTasksByProjectId(project.getId());
        model.addAttribute("project", project);
        model.addAttribute("tasks", tasks);
        return "tasks";
    }



    @GetMapping("/{projectName}/tasks/new")
    public String createTaskForm(@PathVariable String projectName, Model model) {
        Long currentUserId = userService.getCurrentUserId();
        Project project = projectService.getProjectByNameAndUserId(projectName, currentUserId);
        model.addAttribute("project", project);
        model.addAttribute("task", new Task());
        return "create_task";
    }

    @PostMapping
    public String createProject(@ModelAttribute Project project) {
        Long currentUserId = userService.getCurrentUserId();
        project.setUser(userService.findUserById(currentUserId));
        projectService.createProject(project);
        return "redirect:/projects";
    }

    @PostMapping("/{projectName}/tasks")
    public String createTask(@PathVariable String projectName, @ModelAttribute Task task) {
        Long currentUserId = userService.getCurrentUserId();
        Project project = projectService.getProjectByNameAndUserId(projectName, currentUserId);
        taskService.createTask(task, project.getId());
        return "redirect:/projects/" + projectName + "/tasks";
    }


}
