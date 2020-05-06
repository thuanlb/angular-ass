import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../mockup/Product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.scss']
})
export class ShopSingleComponent implements OnInit {
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
