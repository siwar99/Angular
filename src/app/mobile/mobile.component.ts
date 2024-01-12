import { Component } from '@angular/core';
import { product } from '../core/models/product';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {

  listProducts:product[]=[
    {id:1,title:'mobile1',price:500,quantity:10,like:0,image:"../../assets/images/mobile.jpg"},
    {id:2,title:'mobile2',price:300,quantity:5,like:0,image:"../../assets/images/mobile.jpg"},
    {id:3,title:'mobile3',price:200,quantity:5,like:5,image:"../../assets/images/mobile.jpg"}
  ]
}
