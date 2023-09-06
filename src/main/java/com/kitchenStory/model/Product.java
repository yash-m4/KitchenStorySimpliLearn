package com.kitchenStory.model;

import java.sql.Blob;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="product_id",updatable = false,nullable = false)
	private int product_id;
	@Column
	private String productName;
	@Column
	private String productPrice;
	@Column
	private String productDetails;
	@Lob
	private Blob image;
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(String productPrice) {
		this.productPrice = productPrice;
	}
	public String getProductDetails() {
		return productDetails;
	}
	public void setProductDetails(String productDetails) {
		this.productDetails = productDetails;
	}
	public Blob getImage() {
		return image;
	}
	public void setImage(Blob image) {
		this.image = image;
	}
	public Product(int product_id, String productName, String productPrice, String productDetails, Blob image) {
		super();
		this.product_id = product_id;
		this.productName = productName;
		this.productPrice = productPrice;
		this.productDetails = productDetails;
		this.image = image;
	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Product [product_id=" + product_id + ", productName=" + productName + ", productPrice=" + productPrice
				+ ", productDetails=" + productDetails + ", image=" + image + "]";
	}
	
	

}
