import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {
  public model:any;
  product = [];
  constructor(
    public productService : ProductService,
    public activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => {
      data.map(item => {
        this.product.push(item.name);
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
