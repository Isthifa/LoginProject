package com.example.userregistration.service.Impl;


import com.example.userregistration.Exception.PassWordError;
import com.example.userregistration.dto.LoginRequest;
import com.example.userregistration.entity.UserData;
import com.example.userregistration.repository.UserRepository;
import com.example.userregistration.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public UserData saveUser(UserData user) {
        if (checkPassword(user.getPassword())) {
            return userRepository.save(user);
        } else {
            throw new PassWordError("Must contains 1 digit, 1 uppercase, 1 lowercase");
        }
    }


    @Override
    public String loginUser(LoginRequest loginRequest) {
        Optional<UserData> userData = userRepository.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
        if (userData.isPresent()) {
            return "login successfull";
        } else {
            return "login failed";
        }
    }

    private boolean checkPassword(String password) {
        if (password.length() < 8) {
            return false;
        }
        boolean hasUpperCase = false;
        boolean hasLowerCase = false;
        boolean hasDigits = false;
        for (char ch : password.toCharArray()) {
            if (Character.isUpperCase(ch)) {
                hasUpperCase = true;
            } else if (Character.isLowerCase(ch)) {
                hasLowerCase = true;
            } else if (Character.isDigit(ch)) {
                hasDigits = true;
            }
            if (hasDigits && hasLowerCase && hasUpperCase) {
                return true;
            }
        }
        return false;


    }
}
