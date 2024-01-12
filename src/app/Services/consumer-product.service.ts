import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../core/models/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {

  constructor( private http: HttpClient) { }

  getProduct(){
    return this.http.get<product[]>('http://localhost:3000/products')
  }
  getProductById(id:number){
    return this.http.get<product>('http://localhost:3000/products'+'/'+id)
  }

  addProduct(produit:product){
    return this.http.post('http://localhost:3000/products',produit)
  }
  deleteProduct(id:number){
    return this.http.delete('http://localhost:3000/products'+'/'+id)
  }

  updateProduct(produit:product,id:number){
    return this.http.put('http://localhost:3000/products'+'/'+id,produit)
  }

}
