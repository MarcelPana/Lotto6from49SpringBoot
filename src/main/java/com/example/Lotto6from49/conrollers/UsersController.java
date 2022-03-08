package com.example.Lotto6from49.conrollers;
import com.example.Lotto6from49.entities.Users;
import com.example.Lotto6from49.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RequestMapping("/api")
@RestController
public class UsersController {

    UsersService usersService;

    @Autowired
    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping("/addUsersController")
    public Users addUsersController(@RequestBody Users users) {
        return usersService.addUser(users);
    }

    @GetMapping("/findAllUsersController")
    List<Users> findAllUsersController() {
        return usersService.findAllUsers();
    }

    @PutMapping("/updateUsersController")
    Users updateUsersController(@PathVariable("id") Integer id, @RequestBody Users users) {
        Optional<Users> usersFromDatabase = usersService.findByIdUsers(id);
        if (usersFromDatabase.isPresent()) {
            usersFromDatabase.get().setFirstName(users.getFirstName());
            usersFromDatabase.get().setSecondName(users.getSecondName());
            usersFromDatabase.get().setAge(users.getAge());
            usersFromDatabase.get().setEmail(users.getEmail());
            final Users updateUsers = usersService.addUser(usersFromDatabase.get());
            return updateUsers;
        }
        return usersService.addUser(users);
    }

    @GetMapping("/findUsersById/{id}")
    public Optional<Users> findUsersById(@PathVariable("id") Integer id) {
        return usersService.findByIdUsers(id);
    }

    @DeleteMapping("/deleteUserById/{id}")
    public void deleteUserById(@PathVariable("id") Integer id){
        usersService.deleteUsers(id);
    }
}
