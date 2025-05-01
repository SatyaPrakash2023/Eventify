package com.Eventify.dto;

import java.time.LocalDate; 
import java.time.LocalDateTime;

import com.Eventify.entity.Gender;
import com.Eventify.entity.Status;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
	private String userId;
	private String firstName;
	private String lastName;
	private String mobileNo;
	private String email;
	private String userName;
	private LocalDate dateOfBirth;
	private Gender gender;
	private Status status;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	private String passwordFst;
	private String profilePicture;


}
