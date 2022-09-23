package com.example.Lotto6from49.serviceMainGameLogic;

import com.example.Lotto6from49.entities.UsersGuessedNumbers;
import com.example.Lotto6from49.repositories.UsersGuessedNumbersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaveUsersGuessedNrToDataBase {

    private final UsersGuessedNumbersRepository usersGuessedNumbersRepository;

    @Autowired
    public SaveUsersGuessedNrToDataBase(UsersGuessedNumbersRepository usersGuessedNumbersRepository) {
        this.usersGuessedNumbersRepository = usersGuessedNumbersRepository;
    }

    // Save users guessed numbers into Database
    public UsersGuessedNumbers addGuessedNr(UsersGuessedNumbers usersGuessedNumbers) {
        System.out.println("Saved Into Database " + usersGuessedNumbers);
        usersGuessedNumbersRepository.save(usersGuessedNumbers);
        return usersGuessedNumbers;
    }
}
