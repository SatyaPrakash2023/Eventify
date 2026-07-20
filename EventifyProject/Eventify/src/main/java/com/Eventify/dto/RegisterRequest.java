package com.Eventify.dto;

import java.time.LocalDate;

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
public class RegisterRequest {
    private String firstName;
    private String lastName;
    private String mobileNo;
    private String email;
    private String userName;
    private LocalDate dateOfBirth;
    private Gender gender;
    private Status status;
    private String password;
    private String profilePicture;
}
