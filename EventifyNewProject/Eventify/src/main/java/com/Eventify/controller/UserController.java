package com.Eventify.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Eventify.dto.UserDto;
import com.Eventify.service.UserService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {
	private UserService userService;
	
	
	//Build User Add Rest Api;
	@PostMapping
	public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
		UserDto savedUser=userService.createUser(userDto);
		// return new ResponseEntity<>(savedUser,HttpStatus.CREATED);
		return new ResponseEntity<>(savedUser,HttpStatus.CREATED);
	}
	
	//Build Get User by userID
	@GetMapping("{userId}")
	public ResponseEntity<UserDto> getUserById(@PathVariable("userId") String userId){
		UserDto getUserById=userService.getUserDataById(userId);
		return  ResponseEntity.ok(getUserById);
	}
	
	//Build Get All User by restApi
	@GetMapping("/list")
	public ResponseEntity<List<UserDto>> getAllUser(){
		List<UserDto> getAllUserList=userService.getAllUser();
		return  ResponseEntity.ok(getAllUserList);
	}
	
	//Build Update User by restApi
	@PutMapping("/update/{id}")
	public ResponseEntity<UserDto> updatedUser(@PathVariable("id") String userId,@RequestBody UserDto updateUserDto){
		UserDto updatedUserDtoval=userService.updateUserDataById(userId, updateUserDto);
		return  ResponseEntity.ok(updatedUserDtoval);
	}
	
	//Build Delete User by userID
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deletedUserById(@PathVariable("id") String userId){
		String str=userService.deleteUserById(userId);
		return ResponseEntity.ok("Deleted Successfully");
	}
	
	@PostMapping("/Login")
	public ResponseEntity<String> Login(@RequestBody Map<String, String> loginData){
		String userName = loginData.get("userName");
	    String passwordFst = loginData.get("passwordFst");
		String result=userService.Login(userName, passwordFst);
		 if (result.equals("Login Sucessfully")) {
		        return ResponseEntity.ok(result);
		  } else {
		        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
		 }
	}
	

}
