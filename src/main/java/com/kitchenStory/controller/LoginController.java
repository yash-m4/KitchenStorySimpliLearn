package com.kitchenStory.controller;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.sql.rowset.serial.SerialBlob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kitchenStory.model.Product;
import com.kitchenStory.model.ProductDTO;
import com.kitchenStory.model.User;
import com.kitchenStory.repository.ProductRepository;
import com.kitchenStory.service.UserService;


@RestController
@CrossOrigin("*")
public class LoginController {

	@Autowired
	UserService userService;
	@Autowired
	ProductRepository productRepo;
	
	@GetMapping("/home")
	public String home() {
		return "home";
	}
	
	@PostMapping("/register")
	public void registerUser(@RequestBody User user) {
		userService.addUser(user);
		System.out.println(user);
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> loginrUser(@RequestBody User user) {
		System.out.println(user);
		String username=user.getUsername();
		String passowrd=user.getPassword();
		User userV=userService.validateUser(username, passowrd);
		System.out.println(userV);
		 if (userV != null) {
		        Map<String, Object> response = new HashMap<>();
		        response.put("isValid", true);
		        if ("admin".equals(username)) 
		        	response.put("isAdmin", true);
		         else 
		            response.put("isAdmin", false);
		        
		        return ResponseEntity.ok(response);
		    } else {
		        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		    }
		
	}
//	@PostMapping("/adminhome")
//	public void addProduct(@RequestParam("image") MultipartFile image,
//            @RequestParam("productName") String productName,
//            @RequestParam("productPrice") String productPrice,
//            @RequestParam("productDetails") String productDetails
//            ) throws IOException, SQLException {
//	
//		Product product=new Product();
//		product.setProductName(productName);
//		product.setProductDetails(productDetails);
//		product.setProductPrice(productPrice);
//		Blob blob = new SerialBlob(image.getBytes());
//		product.setImage(blob);
//		productRepo.save(product);		
//		
//
//	}
	@PostMapping("/admin-add-product")
	public void addProduct(@RequestParam("image") MultipartFile image,
	        @RequestParam("productName") String productName,
	        @RequestParam("productPrice") String productPrice,
	        @RequestParam("productDetails") String productDetails) throws IOException, SQLException {

	    Product product = new Product();
	    product.setProductName(productName);
	    product.setProductDetails(productDetails);
	    product.setProductPrice(productPrice);
	    Blob blob = new SerialBlob(image.getBytes());
	    product.setImage(blob);
	    productRepo.save(product);
	    System.out.println("oooooooooooooooo");
	}
	
	
	@GetMapping("/products")
	public ResponseEntity<List<ProductDTO>> getAllProducts() {
	    List<Product> products = productRepo.findAll();
	    List<ProductDTO> productDTOs = new ArrayList<>();

	    for (Product product : products) {
	        ProductDTO productDTO = new ProductDTO();
	        productDTO.setProductName(product.getProductName());
	        productDTO.setProductPrice(product.getProductPrice());
	        productDTO.setProductDetails(product.getProductDetails());
	        productDTO.setProduct_id(product.getProduct_id());

	        try {
	            byte[] imageBytes = product.getImage().getBytes(1, (int) product.getImage().length());
	            String base64Image = Base64.getEncoder().encodeToString(imageBytes);
	            productDTO.setImageData(base64Image);
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }

	        productDTOs.add(productDTO);
	    }

	    return ResponseEntity.ok(productDTOs);
	}

	@PostMapping("/delete/{product_id}")
	public void deleteProduct(@PathVariable("product_id") int product_id) {
		
		System.out.println(product_id);
		productRepo.deleteById(product_id);
		
	}
	
	@PostMapping("/adminUpdate")
	public ResponseEntity<String> adminUpdate(@RequestParam("username") String username,
			@RequestParam("password") String password,
					@RequestParam("newPassword") String newPassword) {
		
		User user=userService.validateUser(username, password);
		System.out.println(user);
		if(user!=null) {
			
			user.setPassword(newPassword);
			userService.addUser(user);
			return ResponseEntity.status(HttpStatus.OK).body("{\"message\": \"Admin Password has been Updated\"}");
			
		}
		else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"message\": \"Invalid username or password\"}");
		}
		
	}
	
	@PostMapping("/searchProduct")
	public ResponseEntity<List<ProductDTO>> searchProducts(@RequestParam ("searchProduct") String searchProduct) {
		System.out.println(searchProduct);
		List<Product> products = productRepo.findByProductName(searchProduct);
		List<ProductDTO> productDTOs=new ArrayList<>();
		
		if(products!=null) {
		for(Product product:products) {
			 ProductDTO productDTO = new ProductDTO();
		        productDTO.setProductName(product.getProductName());
		        productDTO.setProductPrice(product.getProductPrice());
		        productDTO.setProductDetails(product.getProductDetails());
		        productDTO.setProduct_id(product.getProduct_id());
		        
		        try {
		            byte[] imageBytes = product.getImage().getBytes(1, (int) product.getImage().length());
		            String base64Image = Base64.getEncoder().encodeToString(imageBytes);
		            productDTO.setImageData(base64Image);
		        } catch (SQLException e) {
		            e.printStackTrace();
		        }

		        productDTOs.add(productDTO);
		    }

		    return ResponseEntity.ok(productDTOs);	
		}
		
		else {
		
			return ResponseEntity.ok(productDTOs);	
		}
	}
	
	@PostMapping("/kart")
	public ResponseEntity<ProductDTO> kart(@RequestParam ("product_id") int product_id,
			@RequestParam ("username") String username) {
		System.out.println(product_id);
		System.out.println(username);
		
		Optional<Product> Oproduct=productRepo.findById(product_id);
		Product product=Oproduct.get();
		ProductDTO productDTO = new ProductDTO();
        productDTO.setProductName(product.getProductName());
        productDTO.setProductPrice(product.getProductPrice());
        productDTO.setProductDetails(product.getProductDetails());
        productDTO.setProduct_id(product.getProduct_id());
        
        try {
            byte[] imageBytes = product.getImage().getBytes(1, (int) product.getImage().length());
            String base64Image = Base64.getEncoder().encodeToString(imageBytes);
            productDTO.setImageData(base64Image);
        } catch (SQLException e) {
            e.printStackTrace();
        }
		return ResponseEntity.status(HttpStatus.OK).body(productDTO);
		
	}

}
