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



}