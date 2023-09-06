import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute){}

  products:any []=[];
  username: string = '';
  product_id: string = '';

  getBase64Image(base64Data: string): string {
    return 'data:image/jpeg;base64,' + base64Data;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'] || '';
    });
    

    this.http.get<any[]>('http://localhost:8080/products').subscribe(
      (Response:any[])=>{
        this.products=Response;

      },
      (error)=>{
        console.log(error)
      }
    )
  }



  productSearch(productSearchForm:NgForm){

    const formdata=new FormData();
    formdata.append('searchProduct',productSearchForm.value.productSearched);

    this.http.post<any[]>('http://localhost:8080/searchProduct',formdata).subscribe(
      (Response:any[])=>{

        if(Response.length>0){
          this.products=Response
        }
        else{
          alert('No Such Item Found')
        }
      },
      (error)=>{
      console.log(error);
      alert('No Such Item Found')

    }
    );
    

  }


  buyThisId(product_id:string){

    // const formdata=new FormData();
    // formdata.append('product_id',product_id)
    // formdata.append('username',this.username)
    

    // this.http.post('http://localhost:8080/kart',formdata).subscribe(
    //   (response)=>{
        
        this.router.navigate(['/kart'], { queryParams: { username: this.username, product_id: product_id } })

    //   }
    //   ,(error)=>{

    //     console.log(error);
    //   }
    // )
  }


}
