package com.store.onlinestore.service;

import com.store.onlinestore.model.Project;
import com.store.onlinestore.model.User;
import com.store.onlinestore.repository.ProjectRepository;
import com.store.onlinestore.repository.UserRepository;
import org.springframework.stereotype.Service;
import jakarta.persistence.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final UserService userService;
    private final UserRepository userRepository;
    private final EntityManager entityManager;

    public ProjectService(ProjectRepository projectRepository, UserService userService, UserRepository userRepository,
                          EntityManager entityManager) {
        this.projectRepository = projectRepository;
        this.userService = userService;
        this.userRepository = userRepository;
        this.entityManager = entityManager;
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
        Long currentUserId = userService.getCurrentUserId();
        project.setUser(userService.findUserById(currentUserId));
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
        System.out.println("Current user ID: " + currentUserId);

        List<Project> createdProjects = projectRepository.findByUserId(currentUserId);
        System.out.println("Created projects: " + createdProjects);

        List<Project> joinedProjects = projectRepository.findJoinedProjectsByUserId(currentUserId);
        System.out.println("Joined projects: " + joinedProjects);

        Map<String, List<Project>> result = new HashMap<>();
        result.put("createdProjects", createdProjects);
        result.put("joinedProjects", joinedProjects);

        return result;
    }


    @Transactional
    public void addUserToProject(Long projectId, Long userId) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        if (project.getParticipants().contains(user)) {
            throw new RuntimeException("User is already in the project");
        }
        project.addParticipant(user);
        projectRepository.save(project);
        userRepository.save(user);
        entityManager.flush();
        entityManager.clear();
    }
}
