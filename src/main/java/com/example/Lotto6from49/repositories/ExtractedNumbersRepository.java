package com.example.Lotto6from49.repositories;

import com.example.Lotto6from49.entities.ExtractedNumbers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExtractedNumbersRepository extends JpaRepository<ExtractedNumbers,Integer> {

}
