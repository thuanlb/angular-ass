import { Component, OnInit } from '@angular/core';
import { Product } from '../../mockup/Product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
  products:Product[];
  page = 1;
  pageSize = 5;
  constructor(
    private productService:ProductService
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
  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe(response =>{
      this.products = this.products.filter(product => product.id != response.id);
    })
  }

}
