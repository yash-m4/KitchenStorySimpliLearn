import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDTO } from '../models/productDTO';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit{

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute){}

  product:any;
  username: string = '';
  product_id: string = '';

  getBase64Image(base64Data: string): string {
    return 'data:image/jpeg;base64,' + base64Data;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'] || '';
      this.product_id = params['product_id'];
      console.log(this.product_id)
    });


    const formdata=new FormData();
    formdata.append('product_id',this.product_id)
    formdata.append('username',this.username)
    

    this.http.post('http://localhost:8080/kart',formdata).subscribe(
      (response:any)=>{
        // const productDTO: ProductDTO = {
        //   product_id: response.product_id,
        //   productName: response.productName,
        //   productPrice: response.productPrice,
        //   productDetails: response.productDetails,
        //   imageData: response.imageData
        // };
    
        this.product = response;
      console.log(this.product.productName)
      console.log(this.product.productPrice);
      
      },
      (error)=>{
        console.log(error)

      }
    )
  }

  logout(){
    alert('Your order is confirmed, Thank you for shopping with us');
    this.router.navigate(['/home']);

  }
}
