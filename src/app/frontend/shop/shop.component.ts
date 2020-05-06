import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {ProductService} from '../../service/product.service';
import { Product } from '../../mockup/Product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public model: any;
  product = [];

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

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.product.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
