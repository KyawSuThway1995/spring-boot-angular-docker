package com.oshop.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oshop.entity.Product;
import com.oshop.repo.ProductRepo;

@RestController
@RequestMapping("/products")
public class ProductApi {
	
	@Autowired
	private ProductRepo repo;

	@GetMapping
	public List<Product> findAll(){
		return repo.findAll();
	}
}
