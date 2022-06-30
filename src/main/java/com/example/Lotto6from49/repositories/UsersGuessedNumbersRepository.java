package com.example.Lotto6from49.repositories;

import com.example.Lotto6from49.entities.UsersGuessedNumbers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersGuessedNumbersRepository extends JpaRepository<UsersGuessedNumbers, Integer>{


}
