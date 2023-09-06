import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../models/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  getBase64Image(base64Data: string): string {
    return 'data:image/jpeg;base64,' + base64Data;
  }
   

  loadProducts() {
    this.productService.getAllProducts().subscribe(
      (response: any[]) => {
        this.products = response;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }
}