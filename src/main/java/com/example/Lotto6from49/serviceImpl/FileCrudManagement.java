package com.example.Lotto6from49.serviceImpl;

import com.example.Lotto6from49.entities.Lotto6From49;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.io.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

@Data
@Service
public class FileCrudManagement {


    // Creating file
    public static void creatingFile() throws IOException {
        if (!LottoGameLogic.players.exists()) {
            System.out.println("The input file does not exist!");
        } else System.out.println("The input file already file exist!");
        if (LottoGameLogic.players.createNewFile())
            System.out.println("File created.");
        else
            System.out.println("File could not be created.");
        System.out.println(LottoGameLogic.players.toString());
    }

    //  Add into file
    public static void addUser() throws IOException {
        PrintWriter printWriter = new PrintWriter(new BufferedWriter(new FileWriter(LottoGameLogic.players, true))); // with true is append mod, without just write over
        //If you specify false instead of true, or if you leave this parameter out, an existing file is deleted, and its data is lost.
        System.out.print("Your name Please");
        LottoGameLogic.user = LottoGameLogic.sc.nextLine();
        System.out.println("You have subscribed as: " + LottoGameLogic.user);
        printWriter.println("\t" + LottoGameLogic.user + ", Today " + LottoGameLogic.timeNow + " You have shot " + LottoGameLogic.guessedNumbers.size() + " numbers");
        printWriter.flush();
        printWriter.close();
    }

    // Reading File
    public static void readingUsers() throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new FileReader(LottoGameLogic.players));
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

}
