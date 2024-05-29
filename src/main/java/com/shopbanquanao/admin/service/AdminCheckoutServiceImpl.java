package com.shopbanquanao.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopbanquanao.model.CheckoutCart;
import com.shopbanquanao.model.Products;
import com.shopbanquanao.admin.repository.AdminCheckoutRepository;

@Service
public class AdminCheckoutServiceImpl implements AdminCheckoutService {

	@Autowired
	private AdminCheckoutRepository checkoutRepo;

	@Override
	public List<CheckoutCart> getAllCheckout() {
		return checkoutRepo.findAll();
	}

	@Override
	public CheckoutCart getCheckoutById(Integer id) {
		return checkoutRepo.findById(id).get();
	}

}