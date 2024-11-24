package com.store.onlinestore.repository;

import com.store.onlinestore.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByUserId(Long userId);
    Optional<Project> findByNameAndUserId(String name, Long userId);

}
