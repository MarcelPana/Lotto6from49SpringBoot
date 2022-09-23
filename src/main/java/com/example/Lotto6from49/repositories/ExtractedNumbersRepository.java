package com.example.Lotto6from49.repositories;

import com.example.Lotto6from49.entities.ExtractedNumbers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;



@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "extractedNumbers", path = "extracted-numbers")
public interface ExtractedNumbersRepository extends JpaRepository<ExtractedNumbers,Integer> {


}
