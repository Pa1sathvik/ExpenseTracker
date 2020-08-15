package com.expensetracker.model;

import java.time.Instant;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "expense")
public class Expense {

	@Id
	private Long id;

	@NonNull
	private Instant expenseDate;

	private String description;
	
	
	private String location;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	private Category category;
	
	@JsonIgnore
	@ManyToOne(cascade = CascadeType.PERSIST)
	private User user;

}
