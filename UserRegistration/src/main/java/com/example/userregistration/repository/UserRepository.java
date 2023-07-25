package com.example.userregistration.repository;


import com.example.userregistration.entity.UserData;
import jakarta.validation.constraints.Email;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserData,Long> {


    Optional<UserData> findByEmailAndPassword(@Email String email, String password);
}
