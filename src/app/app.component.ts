import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { FetchApiService } from './services/fetch-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'api-home-work';

  products!: Product[];

  constructor(private fetchApiService: FetchApiService) {}

  ngOnInit(): void {
    this.getProductsQuery();
  }

  getProductsQuery() {
    this.fetchApiService.getProducts()
    .subscribe(products => {
      this.products = products;
    })
  }

  deleteProductQuery(productId: number): void {
    this.fetchApiService.deleteProducts(productId)
    .subscribe(() => {
      this.products = this.products.filter(p => p.id !== productId);
    })
  }
}
