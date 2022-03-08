package com.example.Lotto6from49.conrollers;

import com.example.Lotto6from49.entities.ExtractedNumbers;
import com.example.Lotto6from49.service.ExtractedNumbersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RequestMapping("/api")
@RestController

public class ExtractedNumbersController {

    private final ExtractedNumbersService extractedNumbersService;

    @Autowired
    public ExtractedNumbersController(ExtractedNumbersService extractedNumbersService) {
        this.extractedNumbersService = extractedNumbersService;
    }

    @PostMapping("/addExtractedNumbers")
    public ExtractedNumbers addExtractedNumbers(@RequestBody ExtractedNumbers extractedNumbers) {
        return extractedNumbersService.addExtractedNumbers(extractedNumbers);
    }


    @GetMapping("/findAllExtractedNumbers")
    public List<ExtractedNumbers> findAllExtractedNumbers() {
        return extractedNumbersService.findAllExtractedNumbers();
    }

    @GetMapping("findExtractedNumbersById/{id}")
    public Optional<ExtractedNumbers> findExtractedNumbersById(@PathVariable("id") Integer id) {
        return extractedNumbersService.findByIdExtractedNumbers(id);
    }

    @PutMapping("/updateExtractedNumbers/{id}")
    public ExtractedNumbers updateExtractedNumbers(@PathVariable("id") Integer id, @RequestBody ExtractedNumbers extractedNumbers) {
        Optional<ExtractedNumbers> extractedNumbersFromDatabase = extractedNumbersService.findByIdExtractedNumbers(id);
        if (extractedNumbersFromDatabase.isPresent()) {
            extractedNumbersFromDatabase.get().setExtractedNumbers(extractedNumbers.getExtractedNumbers());
            extractedNumbersFromDatabase.get().setExtractionDate(extractedNumbers.getExtractionDate());
            final ExtractedNumbers updatedExtractedNumbers = extractedNumbersService.addExtractedNumbers(extractedNumbersFromDatabase.get());

            return updatedExtractedNumbers;
        }
        return extractedNumbersService.addExtractedNumbers(extractedNumbers);
    }

    @DeleteMapping("/deleteExtractedNumbersById/{id}")
    public void deleteExtractedNumbersById(@PathVariable("id") Integer id) {
        extractedNumbersService.deleteExtractedNumbers(id);
    }

}
