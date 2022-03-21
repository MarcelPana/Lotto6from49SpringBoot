package com.example.Lotto6from49.serviceImpl;

import com.example.Lotto6from49.entities.Users;
import com.example.Lotto6from49.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UsersRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = userRepo.findByEmail(username);
        if (users == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new CustomUserDetails(users);
    }

}

