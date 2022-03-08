package com.example.Lotto6from49.serviceImpl;

import com.example.Lotto6from49.entities.Users;
import com.example.Lotto6from49.repositories.UsersRepository;
import com.example.Lotto6from49.service.UsersService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersServiceImpl implements UsersService {

    UsersRepository usersRepository;

    public UsersServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public Users addUser(Users users) {
        return usersRepository.save(users);
    }

    @Override
    public List<Users> findAllUsers() {
        return usersRepository.findAll();
    }

    @Override
    public Users updateUsers(Users users) {
        return usersRepository.save(users);
    }

    @Override
    public void deleteUsers(Integer Id) {

    }

    @Override
    public Optional<Users> findByIdUsers(Integer Id) {
        return Optional.empty();
    }
}
