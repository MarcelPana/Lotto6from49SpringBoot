package com.example.Lotto6from49.entities;
import javax.persistence.*;


@Table
@Entity
public class Users {

    public Users() {
    }

    public Users(String firstName, String secondName, Integer age, String email, String city, String country, Boolean isAdult) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.email = email;
        this.city = city;
        this.country = country;
        this.isAdult = isAdult;

    }


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
    @Column
    private String city;
    @Column
    private String country;
    @Column
    private Boolean isAdult;


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Boolean getAdult() {
        return isAdult;
    }

    public void setAdult(Boolean adult) {
        isAdult = adult;
    }
}
