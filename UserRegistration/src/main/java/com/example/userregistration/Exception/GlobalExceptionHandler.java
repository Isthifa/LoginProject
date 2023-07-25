package com.example.userregistration.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<UserErrors> handlePassWordError(PassWordError exception) {

        return ResponseEntity.badRequest().body(UserErrors.builder()
                .code(HttpStatus.BAD_REQUEST.toString())
                .message(exception.getMessage())
                .build());
    }
}

