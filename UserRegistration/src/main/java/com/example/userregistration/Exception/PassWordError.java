package com.example.userregistration.Exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class PassWordError extends RuntimeException{
    public PassWordError() {
    }

    public PassWordError(String message) {
        super(message);
    }

    public PassWordError(String message, Throwable cause) {
        super(message, cause);
    }
}

