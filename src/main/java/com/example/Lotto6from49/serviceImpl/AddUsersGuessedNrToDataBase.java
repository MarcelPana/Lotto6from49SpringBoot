package com.example.Lotto6from49.serviceImpl;

import com.example.Lotto6from49.entities.ExtractedNumbers;
import com.example.Lotto6from49.entities.UsersGuessedNumbers;
import com.example.Lotto6from49.repositories.UsersGuessedNumbersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class AddUsersGuessedNrToDataBase {


    private final UsersGuessedNumbersRepository usersGuessedNumbersRepository;

    @Autowired
    public AddUsersGuessedNrToDataBase(UsersGuessedNumbersRepository usersGuessedNumbersRepository) {
        this.usersGuessedNumbersRepository = usersGuessedNumbersRepository;
    }

    // Save users guessed numbers into Database
    public UsersGuessedNumbers addGuessedNr(UsersGuessedNumbers usersGuessedNumbers) {
        System.out.println("Database " + usersGuessedNumbers);
        usersGuessedNumbersRepository.save(usersGuessedNumbers);
        return usersGuessedNumbers;
    }
}
