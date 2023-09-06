import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-delete-product',
  templateUrl: './admin-delete-product.component.html',
  styleUrls: ['./admin-delete-product.component.css']
})
export class AdminDeleteProductComponent implements OnInit{

  ngOnInit(): void{

    this.getAllProducts();
  }
  constructor(private http:HttpClient, private router: Router){}

  products:any []=[];

  getBase64Image(base64Data: string): string {
    return 'data:image/jpeg;base64,' + base64Data;
  }

  getAllProducts(){
this.http.get<any[]>('http://localhost:8080/products').subscribe(
  (response:any[])=>{
    this.products=response;

  },
  (error)=>{
console.error('an error has occured ',error);
  }
);

  }

  deleteThisId(product_id:number){

    console.log(product_id);

   
    this.http.post(`http://localhost:8080/delete/${product_id}`, {}).subscribe(
      () => {
        this.router.navigate(['/adminhome']);
        alert("Item Deleted Successfully!");
      },
      (error) =>{

        console.error('Error deleting product:', error);

      }
    );

  }

}
