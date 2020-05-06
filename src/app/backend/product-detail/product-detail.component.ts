import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../mockup/Product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route:  ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.detailProduct();
  }

  detailProduct(){
    this.route.params.subscribe(data => {
      let { id } = data;
      this.productService.detailProduct(id).subscribe(data => this.product = data);
    })
  }

}
