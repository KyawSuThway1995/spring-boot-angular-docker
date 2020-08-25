package com.oshop.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oshop.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

}
