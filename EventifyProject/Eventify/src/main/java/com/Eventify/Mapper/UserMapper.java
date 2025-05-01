package com.Eventify.Mapper;

import com.Eventify.dto.UserDto; 
//import com.Eventify.entity.User;
import com.Eventify.entity.User;

public class UserMapper {
	public static UserDto mappedToUserEntity(User user) {
		
		return new UserDto(  
				
				user.getUserId(),
				user.getFirstName(),
				user.getLastName(),
				user.getMobileNo(),
				user.getEmail(),
				user.getUserName(),
				user.getDateOfBirth(),
				user.getGender(),
				user.getStatus(),
				user.getCreatedAt(),
				user.getUpdatedAt(),
				user.getPasswordFst(),
				user.getProfilePicture()	
				
		);
				
				
				
	}

}
