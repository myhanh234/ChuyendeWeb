package com.shopbanquanao.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopbanquanao.model.Products;
import com.shopbanquanao.admin.repository.AdminProductRepository;

@Service
public class AdminProductServiceImpl implements AdminProductService {

	@Autowired
	private AdminProductRepository productRepo;

	@Override
	public Products saveProduct(Products product) {

		return productRepo.save(product);
	}

	@Override
	public List<Products> getAllProduct() {
		return productRepo.findAll();
	}

	@Override
	public Products getProductById(Integer id) {
		return productRepo.findById(id).get();
	}

	@Override
	public String deleteProduct(Integer id) {
		Products product = productRepo.findById(id).get();

		if (product != null) {
			productRepo.delete(product);
			return "Product Delete Sucessfully";
		}

		return "Something wrong on server";
	}

	@Override
	public Products editProduct(Products p, Integer id) {

		Products oldProduct = productRepo.findById(id).get();

		oldProduct.setName(p.getName());
		oldProduct.setPrice(p.getPrice());
		oldProduct.setAdded_on(p.getAdded_on());
		oldProduct.setCategory_id(p.getCategory_id());

		return productRepo.save(oldProduct);
	}

}