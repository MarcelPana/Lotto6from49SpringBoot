package com.example.Lotto6from49;

import com.example.Lotto6from49.entities.Lotto6From49;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.*;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;

@SpringBootApplication
public class Lotto6from49Application {

    public static void main(String[] args) throws IOException { SpringApplication.run(Lotto6from49Application.class, args);

        Lotto6From49.creatingFile();
        Lotto6From49.addUser();
        Lotto6From49.readingUsers();
        Lotto6From49.playARound();
    }
}




