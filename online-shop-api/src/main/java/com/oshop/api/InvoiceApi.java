package com.oshop.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oshop.entity.Invoice;
import com.oshop.repo.InvoiceRepo;

@RestController
@RequestMapping("/invoices")
public class InvoiceApi {

	@Autowired
	private InvoiceRepo repo;
	
	@PostMapping
	public Invoice save(@RequestBody Invoice invoice) {
		return repo.save(invoice);
	}
	
	@GetMapping
	public List<Invoice> findAll(){
		return repo.findAll();
	}
	
	@GetMapping("{id}")
	public Invoice findById(@PathVariable int id) {
		return repo.getOne(id);
	}
}
