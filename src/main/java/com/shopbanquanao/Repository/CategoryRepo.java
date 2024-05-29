package com.shopbanquanao.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopbanquanao.model.Category;

public interface CategoryRepo  extends JpaRepository<Category, Long> {

}
