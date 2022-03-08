package com.example.Lotto6from49.service;

import com.example.Lotto6from49.entities.Users;

import java.util.List;
import java.util.Optional;


public interface UsersService {

    Users addUser( Users users);
    List<Users> findAllUsers();
    Users updateUsers(Users users);
    void deleteUsers(Integer Id);
    Optional<Users> findByIdUsers(Integer Id);


}
