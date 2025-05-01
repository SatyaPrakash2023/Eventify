package com.Eventify.entity;

import java.time.LocalDate;  
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "UserSignup")
public class User {
    @Id
    @Column(name = "UserId")
    private String userId;
    @Column(name = "FirstName")
    private String firstName;
    @Column(name = "LastName")
    private String lastName;
    @Column(name = "MobileNo")
    private String mobileNo;
    @Column(name = "Email", nullable = false)
    private String email;
    @Column(name = "UserName", unique = true)
    private String userName;
    @Column(name = "DateOfBirth")
    private LocalDate dateOfBirth;
    @Column(name = "Gender")
    private Gender gender; // We can use Enum class later if needed
    @Column(name = "Status")
    private Status status; // We can use Enum class later if needed
    @Column(name = "Created_at")
    private LocalDateTime createdAt;
    @Column(name = "Updated_at")
    private LocalDateTime updatedAt;
    @Column(name = "Password_fst")
    private String passwordFst;
    @Column(name = "Profile_picture")
    private String profilePicture;
	

}
