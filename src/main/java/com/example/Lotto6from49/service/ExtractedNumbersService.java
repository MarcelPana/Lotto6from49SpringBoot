package com.example.Lotto6from49.service;

import com.example.Lotto6from49.entities.ExtractedNumbers;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface ExtractedNumbersService {
    List<ExtractedNumbers> findAllExtractedNumbers();
    ExtractedNumbers saveExtractedNumbers(ExtractedNumbers extractedNumbers);
    Optional<ExtractedNumbers> findByIdExtractedNumbers(Integer extractedNumbersId);
    ExtractedNumbers update(ExtractedNumbers extractedNumbers);
    void deleteExtractedNumbers(Integer extractedNumbersId);
}
