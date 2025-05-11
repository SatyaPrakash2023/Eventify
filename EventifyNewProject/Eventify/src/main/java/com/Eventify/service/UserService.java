package com.Eventify.service;

import java.util.List;

import com.Eventify.dto.UserDto;

public interface UserService {
	public UserDto createUser(UserDto userdto);
	public UserDto getUserDataById(String userId);
	public List<UserDto> getAllUser();
	public UserDto updateUserDataById(String userId,UserDto updatedUser);
	public String deleteUserById(String userId);
	public String Login(String userName,String passwordFst);
	
}
