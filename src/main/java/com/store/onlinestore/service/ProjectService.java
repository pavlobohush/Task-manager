package com.store.onlinestore.service;

import com.store.onlinestore.model.Project;
import com.store.onlinestore.repository.ProjectRepository;
import org.springframework.stereotype.Service;
import jakarta.persistence.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final UserService userService;

    public ProjectService(ProjectRepository projectRepository, UserService userService) {
        this.projectRepository = projectRepository;
        this.userService = userService;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectById(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Project not found with id " + id));
    }

    public List<Project> getProjectsByUserId(Long userId) {
        return projectRepository.findByUserId(userId);
    }

    public Project getProjectByNameAndUserId(String name, Long userId) {
        return projectRepository.findByNameAndUserId(name, userId)
                .orElseThrow(() -> new RuntimeException("Project not found with name: " + name));
    }


    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    public Project updateProject(Long id, Project projectDetails) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Project not found with id " + id));
        project.setName(projectDetails.getName());
        project.setDescription(projectDetails.getDescription());
        return projectRepository.save(project);
    }

    public void deleteProject(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Project not found with id " + id));
        projectRepository.delete(project);
    }

    public Map<String, List<Project>> getProjectsForCurrentUser() {
        Long currentUserId = userService.getCurrentUserId();
        List<Project> createdProjects = projectRepository.findByUserId(currentUserId);
        List<Project> joinedProjects = projectRepository.findJoinedProjectsByUserId(currentUserId);
        Map<String, List<Project>> result = new HashMap<>();
        result.put("createdProjects", createdProjects);
        result.put("joinedProjects", joinedProjects);
        return result;
    }
}
