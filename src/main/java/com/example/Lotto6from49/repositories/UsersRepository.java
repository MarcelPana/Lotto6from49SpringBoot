package com.example.Lotto6from49.repositories;

import com.example.Lotto6from49.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users,Integer> {
    Users findByEmail(String username);
}
