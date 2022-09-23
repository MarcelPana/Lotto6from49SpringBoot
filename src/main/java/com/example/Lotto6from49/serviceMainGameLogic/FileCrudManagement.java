package com.example.Lotto6from49.serviceMainGameLogic;
import org.springframework.stereotype.Service;
import java.io.*;
import java.util.Arrays;


@Service
public class FileCrudManagement {

    static String path = "C:\\Users\\Acasa\\0 SDA\\0 Proiecte practice\\Lotto6from49\\players";
    static File players = new File(path);

    // Creating file
    public static void creatingFile() throws IOException {
        // if (!LottoGameLogic.players.exists()) {
        if (!players.exists()) {
            System.out.println("The input file does not exist!");
        } else System.out.println("The input file already file exist!");
       // if (LottoGameLogic.players.createNewFile())
        if (players.createNewFile())
            System.out.println("File created.");
        else
            System.out.println("File could not be created.");
       // System.out.println(LottoGameLogic.players.toString());
        System.out.println(players.toString());
    }

    //  Add into file
    public static void addUserIntoFile() throws IOException {
        //PrintWriter printWriter = new PrintWriter(new BufferedWriter(new FileWriter(LottoGameLogic.players, true))); // with true is append mod, without just write over
        PrintWriter printWriter = new PrintWriter(new BufferedWriter(new FileWriter(players, true))); // with true is append mod, without just write over
        //If you specify false instead of true, or if you leave this parameter out, an existing file is deleted, and its data is lost.
        System.out.print("Your name Please");
        LottoGameLogic.user = LottoGameLogic.sc.nextLine();
        System.out.println("You have subscribed as: " + LottoGameLogic.user);
        printWriter.println("\t" + LottoGameLogic.user + ", Today " + LottoGameLogic.timeNow + " You have shot " + LottoGameLogic.guessedNumbers.size() + " numbers");
        printWriter.flush();
        printWriter.close();
    }

    // Reading File
    public static void readingUsersFromFiles() throws IOException {
      //  BufferedReader bufferedReader = new BufferedReader(new FileReader(LottoGameLogic.players));
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

}
