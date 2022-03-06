package com.example.Lotto6from49.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Date;

@Data
@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ExtractedNumbers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer extractedNumbersId;
    @Column
    private String extractedNumbers;
    @Column
    private Date extractionDate;


}
