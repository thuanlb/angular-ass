import { Component, OnInit } from '@angular/core';
import { Product } from '../../mockup/Product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  page = 1;
  pageSize = 9;
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProduct().subscribe(response => {
      this.products = response;
    }, error => {
    });

  }
}
