package com.expensetracker.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expensetracker.model.Category;
import com.expensetracker.repository.CategoryRepository;

@RestController
@RequestMapping("/api")
public class CategoryController {

	@Autowired
	private CategoryRepository categoryRepository;

	@GetMapping(value = "/categories")
	public List<Category> getAPI() {

		return categoryRepository.findAll();

	}

	@GetMapping("/category/{id}")
	public ResponseEntity<?> getCategory(@PathVariable Long id) {

		Optional<Category> category = categoryRepository.findById(id);

		return category.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

	}

	@PostMapping("/category")
	public ResponseEntity<?> post(@Valid @RequestBody Category category) throws URISyntaxException {

		Category result = categoryRepository.save(category);
		return ResponseEntity.created(new URI("/api/category" + result)).body(result);

	}

	@PutMapping("/category/{id}")
	public ResponseEntity<?> put(@Valid @RequestBody Category category) {

		Category result = categoryRepository.save(category);
		return ResponseEntity.ok().body(result);

	}

	@DeleteMapping("/category/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {

		categoryRepository.deleteById(id);
		return ResponseEntity.ok().build();

	}

}
