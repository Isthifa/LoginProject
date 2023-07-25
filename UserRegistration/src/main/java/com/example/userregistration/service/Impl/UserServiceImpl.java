package com.example.userregistration.service.Impl;


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
        return userRepository.save(user);
    }

    @Override
    public String loginUser(LoginRequest loginRequest){
        Optional<UserData> userData=userRepository.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
        if(userData.isPresent()){
            return "login successfull";
        }else{
            return "login failed";
        }
    }
}
