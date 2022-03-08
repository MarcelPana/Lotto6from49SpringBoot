package com.example.Lotto6from49.service;

import com.example.Lotto6from49.entities.ExtractedNumbers;
import com.example.Lotto6from49.entities.UsersNumbers;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface UsersNumbersService {

    List<UsersNumbers> findAllUsersNumbers();
    UsersNumbers addUsersNumbers(UsersNumbers usersNumbers);
    Optional<UsersNumbers> findByIdUsersNumbers(Integer usersNumbersId);
    UsersNumbers update(UsersNumbers usersNumbers);
    void deleteUsersNumbers(Integer usersNumbersId);

}
