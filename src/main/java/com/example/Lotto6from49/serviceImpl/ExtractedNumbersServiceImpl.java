package com.example.Lotto6from49.serviceImpl;

import com.example.Lotto6from49.entities.ExtractedNumbers;
import com.example.Lotto6from49.repositories.ExtractedNumbersRepository;
import com.example.Lotto6from49.service.ExtractedNumbersService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExtractedNumbersServiceImpl implements ExtractedNumbersService {

    private final ExtractedNumbersRepository extractedNumbersRepository;

    public ExtractedNumbersServiceImpl(ExtractedNumbersRepository extractedNumbersRepository) {
        this.extractedNumbersRepository = extractedNumbersRepository;
    }

    @Override
    public List<ExtractedNumbers> findAllExtractedNumbers() {
        return extractedNumbersRepository.findAll() ; }

    @Override
    public ExtractedNumbers addExtractedNumbers(ExtractedNumbers extractedNumbers) {
        return extractedNumbersRepository.save(extractedNumbers);
    }

    @Override
    public Optional<ExtractedNumbers> findByIdExtractedNumbers(Integer extractedNumbersId) {
        return extractedNumbersRepository.findById(extractedNumbersId);
    }

    @Override
    public ExtractedNumbers update(ExtractedNumbers extractedNumbers) {
        return extractedNumbersRepository.save(extractedNumbers);
    }

    @Override
    public void deleteExtractedNumbers(Integer extractedNumbersId) {
extractedNumbersRepository.deleteById(extractedNumbersId);

    }
}
