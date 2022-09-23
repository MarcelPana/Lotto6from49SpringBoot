package com.example.Lotto6from49.serviceMainGameLogic;

import com.example.Lotto6from49.entities.ExtractedNumbers;
import com.example.Lotto6from49.repositories.ExtractedNumbersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaveExtractedNrToDataBase {


    private final ExtractedNumbersRepository extractedNumbersRepository;

    @Autowired
    public SaveExtractedNrToDataBase(ExtractedNumbersRepository extractedNumbersRepository) {
        this.extractedNumbersRepository = extractedNumbersRepository;
    }

    // Save lucky numbers into Database
    public ExtractedNumbers addExNr(ExtractedNumbers extractedNumbers) {
        System.out.println("Saved Into Database " + extractedNumbers);
        extractedNumbersRepository.save(extractedNumbers);
        return extractedNumbers;
    }
}
