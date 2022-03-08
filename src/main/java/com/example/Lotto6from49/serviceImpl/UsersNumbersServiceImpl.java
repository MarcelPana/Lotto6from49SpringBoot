package com.example.Lotto6from49.serviceImpl;

import com.example.Lotto6from49.entities.ExtractedNumbers;
import com.example.Lotto6from49.entities.UsersNumbers;
import com.example.Lotto6from49.repositories.ExtractedNumbersRepository;
import com.example.Lotto6from49.repositories.UsersNumbersRepository;
import com.example.Lotto6from49.service.UsersNumbersService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersNumbersServiceImpl implements UsersNumbersService {


    private final UsersNumbersRepository usersNumbersRepository;

    public UsersNumbersServiceImpl(UsersNumbersRepository usersNumbersRepository) {
        this.usersNumbersRepository = usersNumbersRepository;
    }

    @Override
    public List<UsersNumbers> findAllUsersNumbers() {
        return usersNumbersRepository.findAll();
    }

    @Override
    public UsersNumbers addUsersNumbers(UsersNumbers usersNumbers) {
        return usersNumbersRepository.save(usersNumbers);
    }

    @Override
    public Optional<UsersNumbers> findByIdUsersNumbers(Integer usersNumbersId) {
        return Optional.empty();
    }

    @Override
    public UsersNumbers update(UsersNumbers usersNumbers) {
        return usersNumbersRepository.save(usersNumbers);
    }

    @Override
    public void deleteUsersNumbers(Integer usersNumbersId) {
        usersNumbersRepository.deleteById(usersNumbersId);
    }
}

