package com.store.onlinestore.repository;

import com.store.onlinestore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {
}
