package com.example.Lotto6from49.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Table( name = "extracted_numbers")
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ExtractedNumbers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer extractedNumbersId;
    @Column( name = "extracted_numbers")
    private String extractedNumbers;
    @Column (name = "extraction_date")
    private String extractionDate;

}
