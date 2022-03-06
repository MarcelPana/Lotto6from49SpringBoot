package com.example.Lotto6from49.repositories;
import com.example.Lotto6from49.entities.UsersNumbers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersNumbersRepository extends JpaRepository<UsersNumbers,Integer> {
}
