package com.example.Lotto6from49.entities;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Data
@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer usersId;
    @Column
    private String firstName;
    @Column
    private String secondName;
    @Column
    private Integer age;
    @Column
    private String email;


}
