import { Injectable } from '@angular/core';
import { product } from '../core/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listProducts:product[]=[
    {id:1,title:'t-shirt 1',price:50,quantity:10,like:0,image:"test"},
    {id:2,title:'t-shirt 2',price:30,quantity:0,like:0,image:""},
    {id:3,title:'t-shirt 3',price:20,quantity:0,like:5,image:""}
  ]
  constructor() { }

  addProduct(p:product){
    this.listProducts.push(p);
  }
}
