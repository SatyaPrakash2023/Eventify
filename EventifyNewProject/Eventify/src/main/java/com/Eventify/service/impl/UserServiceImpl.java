package com.Eventify.service.impl;

import org.springframework.stereotype.Service;

import com.Eventify.Mapper.UserMapper;
import com.Eventify.dto.UserDto;
import com.Eventify.entity.User;
import com.Eventify.exception.ResourceNotFoundException;
import com.Eventify.repository.UserRepo;
import com.Eventify.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

	private UserRepo userrepo;
	
	@Override
	public UserDto createUser(UserDto userdto) {
		// TODO Auto-generated method stub
		User user=UserMapper.mappedToUserEntity(userdto);
		User savedUser=userrepo.save(user);
		UserDto userDto=UserMapper.mappedToUserDto(savedUser);
		return userDto;
	}

	@Override
	public UserDto getUserDataById(String userId) {
		// TODO Auto-generated method stub
		User user=userrepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Given id is not present in database please verify your Id"+userId));
		UserDto userdto=UserMapper.mappedToUserDto(user);
		return userdto;
	}

}
