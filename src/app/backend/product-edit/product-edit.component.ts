import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../mockup/Product';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route:  ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getEditProducts();
  }

  getEditProducts(){
    this.route.params.subscribe(data => {
      let { id } = data;
      this.productService.getEditProducts(id).subscribe(data => this.product = data);
    })
  }
  updateProduct(){
    this.productService.updateProduct(this.product).subscribe(() =>
    this.router.navigateByUrl('/admin/product-manager'));
  }


}
