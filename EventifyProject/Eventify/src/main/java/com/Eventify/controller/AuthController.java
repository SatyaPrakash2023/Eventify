package com.Eventify.controller;

import com.Eventify.dto.AuthenticationRequest;
import com.Eventify.dto.AuthenticationResponse;
import com.Eventify.dto.RegisterRequest;
import com.Eventify.entity.User;
import com.Eventify.repository.UserRepo;
import com.Eventify.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        if (userRepo.findByUserName(request.getUserName()).isPresent()) {
            return ResponseEntity.badRequest().body(new AuthenticationResponse("Username already exists"));
        }

        if (userRepo.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(new AuthenticationResponse("Email already registered"));
        }

        User user = new User(
                UUID.randomUUID().toString(),
                request.getFirstName(),
                request.getLastName(),
                request.getMobileNo(),
                request.getEmail(),
                request.getUserName(),
                request.getDateOfBirth(),
                request.getGender(),
                request.getStatus(),
                LocalDateTime.now(),
                LocalDateTime.now(),
                passwordEncoder.encode(request.getPassword()),
                request.getProfilePicture());

        userRepo.save(user);

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUserName(), request.getPassword()));

        String jwt = jwtService.generateToken(
                org.springframework.security.core.userdetails.User
                        .withUsername(user.getUserName())
                        .password(user.getPasswordFst())
                        .roles("USER")
                        .build());

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUserName(), request.getPassword()));

        User user = userRepo.findByUserName(request.getUserName())
                .orElseThrow();

        String jwt = jwtService.generateToken(
                org.springframework.security.core.userdetails.User
                        .withUsername(user.getUserName())
                        .password(user.getPasswordFst())
                        .roles("USER")
                        .build());

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}
