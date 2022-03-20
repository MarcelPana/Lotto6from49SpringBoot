package com.example.Lotto6from49.serviceImpl;

import com.example.Lotto6from49.entities.ExtractedNumbers;
import com.example.Lotto6from49.entities.Lotto6From49;
import com.example.Lotto6from49.repositories.ExtractedNumbersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddToDataBase {


    private final ExtractedNumbersRepository extractedNumbersRepository;

    @Autowired
    public AddToDataBase(ExtractedNumbersRepository extractedNumbersRepository) {
        this.extractedNumbersRepository = extractedNumbersRepository;
    }

    // Save lucky numbers into Database
    public ExtractedNumbers addExNr(ExtractedNumbers extractedNumbers) {
        System.out.println("Database " + extractedNumbers);
        extractedNumbersRepository.save(extractedNumbers);
        return extractedNumbers;
    }
}
