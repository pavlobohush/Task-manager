package com.store.onlinestore.repository;
import com.store.onlinestore.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}

