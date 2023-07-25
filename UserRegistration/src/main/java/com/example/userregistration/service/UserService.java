package com.example.userregistration.service;

import com.example.userregistration.dto.LoginRequest;
import com.example.userregistration.entity.UserData;

public interface UserService {

    UserData saveUser(UserData user);

    String loginUser(LoginRequest loginRequest);
}
