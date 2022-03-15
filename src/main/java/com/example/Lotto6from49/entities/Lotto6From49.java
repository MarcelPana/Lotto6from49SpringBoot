package com.example.Lotto6from49.entities;


import com.example.Lotto6from49.repositories.ExtractedNumbersRepository;
import com.example.Lotto6from49.serviceImpl.AddToDataBase;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.persistence.Entity;
import java.io.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;


@Data
//@AllArgsConstructor
@NoArgsConstructor
@Service
public class Lotto6From49 extends Thread {


    static Scanner sc = new Scanner(System.in);
    static boolean keepPlaying = true;
    static int chosenNumber;
    static String path = "C:\\Users\\Acasa\\0 SDA\\0 Proiecte practice\\Lotto6from49\\players";
    static File players = new File(path);
    static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-YYYY; hh:mm;");
    public static String timeNow = LocalDateTime.now().format(formatter);
    static String user;
    static ArrayList<Integer> guessedNumbers = new ArrayList<>();
    public static ArrayList<Integer> luckyNumbers = new ArrayList<>(6);



    // Creating file
    public static void creatingFile() throws IOException {
        if (!players.exists()) {
            System.out.println("The input file does not exist!");
        } else System.out.println("The input file already file exist!");
        if (players.createNewFile())
            System.out.println("File created.");
        else
            System.out.println("File could not be created.");
        System.out.println(players.toString());
    }

    //  Add into file
    public static void addUser() throws IOException {
        PrintWriter printWriter = new PrintWriter(new BufferedWriter(new FileWriter(players, true))); // with true is append mod, without just write over
        //If you specify false instead of true, or if you leave this parameter out, an existing file is deleted, and its data is lost.
        System.out.print("Your name Please");
        user = sc.nextLine();
        System.out.println("You have subscribed as: " + user);
        printWriter.println("\t" + user + ", Today " + timeNow + " You have shot " + guessedNumbers.size() + " numbers");
        printWriter.flush();
        printWriter.close();
    }

    // Reading File
    public static void readingUsers() throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new FileReader(players));
        String line = bufferedReader.readLine();
        while (line != null) {
            System.out.println(line);
            line = bufferedReader.readLine();
        }
        try {
            String[] listaUseri = line.split("\t");
            String title = listaUseri[0];

            System.out.println(Arrays.toString(listaUseri));
        } catch (NullPointerException ignored) {
            bufferedReader.close();
        }
    }

    //Game play round
    public static void playARound() {
        System.out.println("Let's play!");
        do {
            boolean validInput;
            String answer;

// Get the user's numbers
            System.out.println("Choose a number please!");
            ArrayList<Integer> userNumbers = new ArrayList<>(6);
            do {
                try {
                    //chosenNumber = sc.nextInt();
                    chosenNumber = (int) (Math.random() * 49) + 1;
                    if ((chosenNumber < 1) || (chosenNumber > 49)) {
                        System.out.print("Between 1 " + "and 49, please! Try again: ");
                    } else if (!userNumbers.contains(chosenNumber)) {
                        userNumbers.add(chosenNumber);
                        System.out.println("Your chosen numbers are: " + userNumbers);
                    }
                } catch (Exception e) {
                    sc.next();
                    System.out.println("Just numbers please!");
                }
            } while (userNumbers.size() < 6);
            System.out.println();
            System.out.println();

// The lucky 6 random numbers
            System.out.println("And now, let's see the lucky numbers");
            //ArrayList<Integer> luckyNumbers = new ArrayList<>(6);
            do {
                int number = (int) (Math.random() * 49) + 1;
                if (!luckyNumbers.contains(number))
                    luckyNumbers.add(number);
                 try {
                 Thread.sleep(1000);
                } catch (InterruptedException ignored) {
                }
                System.out.println("The lucky numbers are: " + luckyNumbers);
            } while (luckyNumbers.size() < 6);

// Check the numbers
            System.out.println();
            System.out.println();
            // ArrayList<Integer> guessedNumbers = new ArrayList<>();
            for (int s : userNumbers) {
                for (int l : luckyNumbers) {
                    if (s == l) {
                        guessedNumbers.add(s);
                    }
                }
            }
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-YYYY; hh:mm;");
            System.out.println("Your chosen numbers are: " + userNumbers);
            System.out.println("The lucky numbers are:   " + luckyNumbers);
            System.out.println("The guessed numbers are: " + guessedNumbers);
            System.out.println(user + " Today " + timeNow + " You have shot " + guessedNumbers.size() + " numbers");

            ExtractedNumbers extractedNumbers = new ExtractedNumbers();
            extractedNumbers.setExtractedNumbers(luckyNumbers.toString());
            extractedNumbers.setExtractionDate(timeNow);
            addToDataBase.addExNr(extractedNumbers);


// Play again?
            do {
                System.out.print("\nPlay again? (Y or N)");
                answer = sc.next();
                validInput = true;
                if (answer.equalsIgnoreCase("Y")) ;
                else if (answer.equalsIgnoreCase("N"))
                    keepPlaying = false;
                else
                    validInput = false;
            } while (!validInput);
        } while (keepPlaying);
        System.out.println("\nThank you for playing!");


    }

    private static AddToDataBase addToDataBase;

    @Autowired
    public Lotto6From49(AddToDataBase addToDataBase) {
        this.addToDataBase = addToDataBase;
    }


    /**
     // Save lucky numbers in Database
     public static ExtractedNumbers addExNr() {
     Lotto6From49 lotto6From49 = new Lotto6From49();
     ExtractedNumbers extractedNumbers = new ExtractedNumbers();
     extractedNumbers.setExtractedNumbers(luckyNumbers.toString());
     extractedNumbers.setExtractionDate(timeNow);
     System.out.println("Database " + extractedNumbers);
     lotto6From49.extractedNumbersRepository.save(extractedNumbers);
     return extractedNumbers;

     }



     @Autowired private ExtractedNumbersController extractedNumbersController;

     @RequestMapping(value = "/addExtractedNumbers", method = RequestMethod.POST)
     @ResponseBody public String post(@PathVariable String userId, HttpServletRequest request) {
     return String.valueOf(extractedNumbersController.addExtractedNumbers(addExNr()));
     }
     **/

}