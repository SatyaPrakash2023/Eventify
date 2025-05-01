package com.Eventify.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Eventify.entity.User;

public interface UserRepo extends JpaRepository<User, String>{
	
}
