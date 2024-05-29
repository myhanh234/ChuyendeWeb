package com.shopbanquanao.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopbanquanao.model.CheckoutCart;
 

public interface AdminCheckoutRepository extends JpaRepository<CheckoutCart, Integer> {

}