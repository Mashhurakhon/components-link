import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { FetchApiService } from './services/fetch-api.service';
import { InputStateComponent } from './components/input-state/input-state.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'api-home-work';
  products!: Product[];
  public isDisabledBtn!: boolean;

  constructor(private fetchApiService: FetchApiService) {}


  // products
  ngOnInit(): void {
    this.getProductsQuery();
  }

  recieveResult(res: boolean) {
    this.isDisabledBtn = res;
    console.log(res);
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

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
