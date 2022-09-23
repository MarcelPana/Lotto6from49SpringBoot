package com.example.Lotto6from49.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Data
@Table
@Entity
public class UsersNumbers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer UserNumbersId;
    @Column
    private Integer UserNumbers;
    @Column
    private Date extractionDate;

}
