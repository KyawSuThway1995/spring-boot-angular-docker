package com.oshop.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oshop.entity.Invoice;

public interface InvoiceRepo extends JpaRepository<Invoice, Integer> {

}
