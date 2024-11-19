package com.store.onlinestore.service;

import com.store.onlinestore.model.Project;
import com.store.onlinestore.model.Task;
import com.store.onlinestore.repository.ProjectRepository;
import com.store.onlinestore.repository.TaskRepository;
import org.springframework.stereotype.Service;
import jakarta.persistence.*;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    private final ProjectRepository projectRepository;

    private final UserService userService;

    public TaskService(TaskRepository taskRepository, UserService userService, ProjectRepository projectRepository) {
        this.taskRepository = taskRepository;
        this.userService = userService;
        this.projectRepository = projectRepository;
    }

    public List<Task> getAllTasksForCurrentUser() {
        Long currentUserId = userService.getCurrentUserId();
        return taskRepository.findByUserId(currentUserId);
    }

    public List<Task> getTasksByProjectId(Long projectId) {
        return taskRepository.findByProjectId(projectId);
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Task not found with id " + id));
    }

    public Task createTask(Task task, Long projectId) {
        Long currentUserId = userService.getCurrentUserId();
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));
        if (!project.getUser().getId().equals(currentUserId)) {
            throw new RuntimeException("Project does not belong to the user");
        }
        task.setUser(userService.findUserById(currentUserId));
        task.setProject(project);
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task taskDetails) {
        Long currentUserId = userService.getCurrentUserId();
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Task not found with id " + id));
        if (!task.getUser().getId().equals(currentUserId)) {
            throw new RuntimeException("Task does not belong to the user");
        }
        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        task.setDueDate(taskDetails.getDueDate());
        task.setStatus(taskDetails.getStatus());
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Task not found with id " + id));
        taskRepository.delete(task);
    }
}
