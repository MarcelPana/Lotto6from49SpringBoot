package com.example.Lotto6from49.conrollers;

import com.example.Lotto6from49.entities.UsersNumbers;
import com.example.Lotto6from49.service.UsersNumbersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api")
@RestController
public class UsersNumbersController {


    private final UsersNumbersService usersNumbersService;

    @Autowired
    public UsersNumbersController(UsersNumbersService usersNumbersService) {
        this.usersNumbersService = usersNumbersService;
    }

    @PostMapping("/addUsersNumbers")
    public UsersNumbers addUsersNumbers(@RequestBody UsersNumbers usersNumbers) {
        return usersNumbersService.addUsersNumbers(usersNumbers);
    }


    @GetMapping("/findAllUsersNumbers")
    public List<UsersNumbers> findAllUsersNumbers() {
        return usersNumbersService.findAllUsersNumbers();
    }

    @GetMapping("findUsersNumbersById/{id}")
    public Optional<UsersNumbers> findUsersNumbersById(@PathVariable("id") Integer id) {
        return usersNumbersService.findByIdUsersNumbers(id);
    }

    @PutMapping("/updateUsersNumbers/{id}")
    public UsersNumbers updateUsersNumbers(@PathVariable("id") Integer id, @RequestBody UsersNumbers usersNumbers) {
        Optional<UsersNumbers> UsersNumbersFromDatabase = usersNumbersService.findByIdUsersNumbers(id);
        if (UsersNumbersFromDatabase.isPresent()) {
            UsersNumbersFromDatabase.get().setExtractionDate(usersNumbers.getExtractionDate());
            final UsersNumbers updatedUsersNumbers = usersNumbersService.addUsersNumbers(UsersNumbersFromDatabase.get());

            return updatedUsersNumbers;
        }
        return usersNumbersService.addUsersNumbers(usersNumbers);
    }

    @DeleteMapping("/deleteUsersNumbersById/{id}")
    public void deleteExtractedNumbersById(@PathVariable("id") Integer id) {
        usersNumbersService.deleteUsersNumbers(id);
    }


}
