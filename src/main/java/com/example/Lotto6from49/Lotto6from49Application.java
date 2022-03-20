package com.example.Lotto6from49;
import com.example.Lotto6from49.serviceImpl.FileCrudManagement;
import com.example.Lotto6from49.serviceImpl.LottoGameLogic;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.*;

@SpringBootApplication
public class Lotto6from49Application {

    public static void main(String[] args) throws IOException { SpringApplication.run(Lotto6from49Application.class, args);

        FileCrudManagement.creatingFile();
        FileCrudManagement.addUser();
        FileCrudManagement.readingUsers();
        LottoGameLogic.playARound();

    }






}




