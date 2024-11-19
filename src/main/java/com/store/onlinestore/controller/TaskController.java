package com.store.onlinestore.controller;

import com.store.onlinestore.model.Task;
import com.store.onlinestore.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAllTasksForCurrentUser() {
        return taskService.getAllTasksForCurrentUser();
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id);
    }

    @GetMapping("/project/{projectId}")
    public List<Task> getTasksByProject(@PathVariable Long projectId) {
        if (projectId != null) {
            return taskService.getTasksByProjectId(projectId);
        }
        return taskService.getAllTasksForCurrentUser();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task, @RequestParam Long projectId) {
        return taskService.createTask(task, projectId);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
        return taskService.updateTask(id, taskDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }
}
