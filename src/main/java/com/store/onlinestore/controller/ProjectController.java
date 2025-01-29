package com.store.onlinestore.controller;

import com.store.onlinestore.model.Project;
import com.store.onlinestore.model.User;
import com.store.onlinestore.repository.ProjectRepository;
import com.store.onlinestore.service.ProjectService;
import com.store.onlinestore.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;
    private final UserService userService;
    private final ProjectRepository projectRepository;

    public ProjectController(ProjectService projectService, UserService userService, ProjectRepository projectRepository) {
        this.projectService = projectService;
        this.userService = userService;
        this.projectRepository = projectRepository;
    }

    @GetMapping
    public ResponseEntity<?> getProjectsForCurrentUser() {
        try {
            Long currentUserId = userService.getCurrentUserId();
            List<Project> createdProjects = projectRepository.findByUserId(currentUserId);
            List<Project> joinedProjects = projectRepository.findJoinedProjectsByUserId(currentUserId);

            Map<String, List<Project>> response = new HashMap<>();
            response.put("createdProjects", createdProjects);
            response.put("joinedProjects", joinedProjects);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching projects");
        }
    }

    @GetMapping("/{projectId}")
    public Project getProjectById(@PathVariable Long projectId) {
        return projectService.getProjectById(projectId);
    }

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        Long currentUserId = userService.getCurrentUserId();
        project.setUser(userService.findUserById(currentUserId));
        return projectService.createProject(project);
    }

    @PutMapping("/{projectId}")
    public Project updateProject(@PathVariable Long projectId, @RequestBody Project projectDetails) {
        return projectService.updateProject(projectId, projectDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
    }

    @PostMapping("/{projectId}/add-user")
    public ResponseEntity<?> addUserToProject(
            @PathVariable Long projectId,
            @RequestBody Map<String, Long> request
    ) {
        try {
            Long userId = request.get("userId");
            if (userId == null) {
                return ResponseEntity.badRequest().body("User ID is required");
            }
            projectService.addUserToProject(projectId, userId);
            Project updatedProject = projectService.getProjectById(projectId);
            return ResponseEntity.ok(updatedProject);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Failed to add user");
        }
    }
}
