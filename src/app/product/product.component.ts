import { Component } from '@angular/core';
import { product } from '../core/models/product';
import { ProductService } from '../Services/product.service';
import { CalculService } from '../Services/calcul.service';
import { ConsumerProductService } from '../Services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  price!: number;
  listProducts: product[] = [];
  alert!:number;
  constructor(private Ps: ProductService,private Cs:CalculService, private cons:ConsumerProductService) {}
  ngOnInit() {
    //this.listProducts = this.Ps.listProducts;
    this.cons.getProduct().subscribe(
      (data)=>this.listProducts=data,
    )
  }

  increment(i: number) {
    this.listProducts[i].like++;
  }
  buy(i: number) {
    this.listProducts[i].quantity--;
  }
  getAlert(){
    this.alert=this.Cs.getStat(this.listProducts,'quantity',0);
  }
  delete(id:number){
    this.cons.deleteProduct(id).subscribe(
      ()=>this.ngOnInit()
    )
  }
}
