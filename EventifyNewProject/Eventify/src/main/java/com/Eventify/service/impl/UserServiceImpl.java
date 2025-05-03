package com.Eventify.service.impl;

import java.util.List; 

import org.springframework.stereotype.Service;
import java.util.stream.Collectors;
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

	@Override
	public List<UserDto> getAllUser() {
		// TODO Auto-generated method stub
		List<User> userList=userrepo.findAll();
		return userList.stream().map((user) ->UserMapper.mappedToUserDto(user))
				.collect(Collectors.toList());
	}


	@Override
	public UserDto updateUserDataById(String userId, UserDto updatedUser) {
		// TODO Auto-generated method stub
		User user=userrepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Given id is not present in database please verify your Id"+userId));
		user.setUserId(updatedUser.getUserId());
		user.setFirstName(updatedUser.getFirstName());
		user.setLastName(updatedUser.getLastName());
		user.setMobileNo(updatedUser.getMobileNo());
		user.setEmail(updatedUser.getEmail());
		user.setUserName(updatedUser.getUserName());
		user.setDateOfBirth(updatedUser.getDateOfBirth());
		user.setGender(updatedUser.getGender());
		user.setStatus(updatedUser.getStatus());
		user.setCreatedAt(updatedUser.getCreatedAt());
		user.setUpdatedAt(updatedUser.getUpdatedAt());
		user.setPasswordFst(updatedUser.getPasswordFst());
		user.setProfilePicture(updatedUser.getProfilePicture());
		
		User updatedUserObj=userrepo.save(user);
		UserDto updatedUserDto=UserMapper.mappedToUserDto(updatedUserObj);
		
		return updatedUserDto;
	}

	@Override
	public String deleteUserById(String userId) {
		// TODO Auto-generated method stub
		User user=userrepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Given id is not present in database please verify your Id"+userId));
		userrepo.delete(user);
		return "Deleted sucessfully";
	}

}
