import { Injectable } from '@angular/core';
import {  data } from '../mockup/MockData';
import { Product } from '../mockup/Product';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = 'https://5e7ab0880e046300163323dc.mockapi.io/product';

  constructor(
    private http: HttpClient
  ) { }


  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.products);

  }


  detailProduct(id: Number): Observable<Product>{
    return this.http.get<Product>(`${this.products}/${id}`);
  }


  getEditProducts(id: Number): Observable<Product>{
    return this.http.get<Product>(`${this.products}/${id}`);
  }
  updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.products}/${product.id}`, product);
  }


  addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.products}`, product);
  }


  deleteProduct(id):Observable<Product>{
    return this.http.delete<Product>(`${this.products}/${id}`);
  }



}
