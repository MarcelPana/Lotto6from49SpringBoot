package com.example.Lotto6from49.serviceMainGameLogic;
import com.example.Lotto6from49.entities.ExtractedNumbers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Scanner;


@Service
public class LottoGameLogic extends Thread{

    static Scanner sc = new Scanner(System.in);
    static boolean keepPlaying = true;
    static int chosenNumber;
    static String path = "C:\\Users\\Acasa\\0 SDA\\0 Proiecte practice\\Lotto6from49\\players";
    static File players = new File(path);
    static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-YYYY; hh:mm;");
    static String timeNow = LocalDateTime.now().format(formatter);
    static String user;
    static ArrayList<Integer> guessedNumbers = new ArrayList<>();
    static ArrayList<Integer> luckyNumbers = new ArrayList<>(6);

    private static SaveExtractedNrToDataBase addToDataBase = null;

    @Autowired
    public LottoGameLogic(SaveExtractedNrToDataBase addToDataBase) {
        LottoGameLogic.addToDataBase = addToDataBase;
    }

    //Game play round
    public static void playARound() {
        System.out.println("Let's play" + " " + LottoGameLogic.user + "!");
        do {
            boolean validInput;
            String answer;

// Get the user's numbers
            System.out.println(LottoGameLogic.user + " " + "choose a number please!");
            ArrayList<Integer> userNumbers = new ArrayList<>(6);
            do {
                try {
                    chosenNumber = sc.nextInt();
                    //chosenNumber = (int) (Math.random() * 49) + 1;
                    if ((chosenNumber < 1) || (chosenNumber > 49)) {
                        System.out.print("Between 1 " + "and 49, please! Try again: ");
                    } else if (!userNumbers.contains(chosenNumber)) {
                        userNumbers.add(chosenNumber);
                        System.out.println(LottoGameLogic.user + " " + "your chosen numbers are: " + userNumbers);
                    }
                } catch (Exception e) {
                    sc.next();
                    System.out.println("Just numbers please!");
                }
            } while (userNumbers.size() < 6);
            System.out.println();
            System.out.println();

// The 6 random lucky numbers
            System.out.println("And now, let's see the lucky numbers");
            ArrayList<Integer> luckyNumbers = new ArrayList<>(6);
            do {
                int number = (int) (Math.random() * 49) + 1;
                if (!luckyNumbers.contains(number))
                    luckyNumbers.add(number);
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException ignored) {
                }
                System.out.println("The lucky numbers are: " + luckyNumbers);
            } while (luckyNumbers.size() < 6);

// Check the numbers

            System.out.println();
            System.out.println();

            for (int s : userNumbers) {
                for (int l : luckyNumbers) {
                    if (s == l) {
                        guessedNumbers.add(s);
                    }
                }
            }

            System.out.println(LottoGameLogic.user + " " + "your chosen numbers are: " + userNumbers);
            System.out.println("The lucky numbers are:   " + luckyNumbers);
            System.out.println("The guessed numbers are: " + guessedNumbers);
            System.out.println(user + " Today " + timeNow + " You have shot " + guessedNumbers.size() + " numbers");

            ExtractedNumbers extractedNumbers = new ExtractedNumbers();
            extractedNumbers.setExtractedNumbers(luckyNumbers.toString());
            extractedNumbers.setExtractionDate(timeNow);
            addToDataBase.addExNr(extractedNumbers);

// Play again?
            do {
                System.out.print( LottoGameLogic.user + "" + " would you like to try again? (Y or N)");
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
}
