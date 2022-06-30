package com.example.Lotto6from49.entities;


import javax.persistence.*;
import java.sql.Date;

@Entity
@Table

public class UsersGuessedNumbers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer UserGuessedNumbersId;
    @Column
    private Integer UserGuessedNumbers;
    @Column
    private Date extractionDate;

    public UsersGuessedNumbers() {

    }

    public Integer getUserGuessedNumbersId() {
        return UserGuessedNumbersId;
    }

    public void setUserGuessedNumbersId(Integer userGuessedNumbersId) {
        UserGuessedNumbersId = userGuessedNumbersId;
    }

    public Integer getUserGuessedNumbers() {
        return UserGuessedNumbers;
    }

    public void setUserGuessedNumbers(Integer userGuessedNumbers) {
        UserGuessedNumbers = userGuessedNumbers;
    }

    public Date getExtractionDate() {
        return extractionDate;
    }

    public void setExtractionDate(Date extractionDate) {
        this.extractionDate = extractionDate;
    }

    public UsersGuessedNumbers(Integer userGuessedNumbersId, Integer userGuessedNumbers, Date extractionDate) {
        UserGuessedNumbersId = userGuessedNumbersId;
        UserGuessedNumbers = userGuessedNumbers;
        this.extractionDate = extractionDate;
    }
}
