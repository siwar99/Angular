import { Component, ViewChild } from '@angular/core';
import { product } from '../core/models/product';
import { ShowOneProductComponent } from '../show-one-product/show-one-product.component';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  @ViewChild(ShowOneProductComponent) child:any

  listProducts:product[]=[
    {id:1,title:'tv1',price:500,quantity:10,like:0,image:"../../assets/images/tv.jpg"},
    {id:2,title:'tv2',price:300,quantity:5,like:0,image:"../../assets/images/tv.jpg"},
    {id:3,title:'tv3',price:200,quantity:5,like:5,image:"../../assets/images/tv.jpg"}
  ]

  afterRecieveData(t:product){
    let index = this.listProducts.indexOf(t);
    this.listProducts[index].like++;
  }

  afficherMsg(){
    this.child.showMsgChild();
  }
}
