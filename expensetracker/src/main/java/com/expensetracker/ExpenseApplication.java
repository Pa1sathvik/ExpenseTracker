package com.expensetracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

/**
 * 
 * Main Spring boot application.
 * @author svutukur
 *
 */
@EnableCaching
@SpringBootApplication
public class ExpenseApplication {
	public static void main(String[] args) {

		SpringApplication.run(ExpenseApplication.class, args);

	}
}
