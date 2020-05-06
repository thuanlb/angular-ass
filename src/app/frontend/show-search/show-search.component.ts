import { Component, OnInit } from '@angular/core';
import { Product } from '../../mockup/Product';
import {ProductService} from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.scss']
})
export class ShowSearchComponent implements OnInit {

  product : Product[];
  constructor(
    public productService : ProductService,
    public activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(product => {
      this.productService.getProduct().subscribe(data=> {
        this.product = data.filter( item => item.name == product.name);
      })
    })
  }

}
