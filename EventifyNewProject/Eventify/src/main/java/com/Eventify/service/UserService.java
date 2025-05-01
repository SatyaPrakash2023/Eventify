package com.Eventify.service;

import com.Eventify.dto.UserDto;

public interface UserService {
	UserDto createUser(UserDto userdto);
	UserDto getUserDataById(String userId);
	
}
