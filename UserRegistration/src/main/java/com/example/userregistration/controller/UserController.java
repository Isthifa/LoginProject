package com.example.userregistration.controller;


import com.example.userregistration.dto.LoginRequest;
import com.example.userregistration.entity.UserData;
import com.example.userregistration.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public String registerUser(@RequestBody UserData user) {
        userService.saveUser(user);
        return "User Registered";
    }
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        String message = userService.loginUser(loginRequest);
        System.out.println(message);
    if(userService.loginUser(loginRequest).equals("login failed"))
        return ResponseEntity.badRequest().body("Login failed");
    else
        return ResponseEntity.ok(userService.loginUser(loginRequest));
    }

}
