package com.store.onlinestore.repository;

import com.store.onlinestore.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByUserId(Long userId);
    Optional<Project> findByNameAndUserId(String name, Long userId);
    @Query("SELECT p FROM Project p JOIN p.participants u WHERE u.id = :userId")
    List<Project> findJoinedProjectsByUserId(@Param("userId") Long userId);

}
