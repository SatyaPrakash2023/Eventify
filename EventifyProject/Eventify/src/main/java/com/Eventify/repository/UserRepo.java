package com.Eventify.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Eventify.entity.User;

public interface UserRepo extends JpaRepository<User, String> {

    Optional<User> findByUserName(String userName);

    Optional<User> findByEmail(String email);
}
