//package com.shopbanquanao.admin.model;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToOne;
//import javax.persistence.Table;
//
//
//@Entity
//public class Products {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	long id;
//	String name, price, added_on, category_id;
//
//	public long getId() {
//		return id;
//	}
//
//	public void setId(long id) {
//		this.id = id;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public String getPrice() {
//		return price;
//	}
//
//	public void setPrice(String price) {
//		this.price = price;
//	}
//
//	public String getAdded_on() {
//		return added_on;
//	}
//
//	public void setAdded_on(String added_on) {
//		this.added_on = added_on;
//	}
//
//	public String getCategory_id() {
//		return category_id;
//	}
//
//	public void setCategory_id(String category_id) {
//		this.category_id = category_id;
//	}
//
//}
