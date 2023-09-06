import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent {

  constructor(private http: HttpClient, private router: Router){}


  selectedImage: File | null = null;

  

  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length) {
      this.selectedImage = inputElement.files[0];
    }
  }
  // addProduct(addProductForm:NgForm){
  //   console.log(addProductForm)

  //   const product = new Product(
  //     addProductForm.value.productName,
  //     addProductForm.value.productPrice,
  //     addProductForm.value.productDetails,
  //     addProductForm.value.image
  //   );

  //   this.http.post('http://localhost:8080/admin-add-product', product)
  //   .subscribe(
  //     response => {
  //       // Handle success response
  //       console.log(response);

  //           this.router.navigate(['/adminhome']);
  //           alert("Item Added Successfully!");
          
  //     },
  //     error => {
  //       // Handle error response
  //       console.error(error);
  //     }
  //   );



  // }
  addProduct(addProductForm: NgForm) {
    // const product = new Product(
    //   addProductForm.value.productName,
    //   addProductForm.value.productPrice,
    //   addProductForm.value.productDetails,
    //   addProductForm.value.image
    // );

    
  
    // const formData = product.toFormData();

    const formData = new FormData();
    formData.append('productName', addProductForm.value.productName);
    formData.append('productPrice', addProductForm.value.productPrice);
    formData.append('productDetails', addProductForm.value.productDetails);
    formData.append('image', this.selectedImage as File);
  
    this.http.post('http://localhost:8080/admin-add-product', formData)
      .subscribe(
        response => {
          // Handle success response
          console.log(response);
          this.router.navigate(['/adminhome']);
          alert("Item Added Successfully!");
        },
        error => {
          // Handle error response
          console.error(error);
        }
      );
  }
  
  
}
