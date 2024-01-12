import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { product } from '../core/models/product';
import { ConsumerProductService } from '../Services/consumer-product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
id!:number;
listProducts!:product
  constructor(private Act:ActivatedRoute,private Ps:ProductService,private cons:ConsumerProductService) { }

  ngOnInit(){
    this.id=this.Act.snapshot.params['id'];
    console.log(this.id);
    //this.listProducts=this.Ps.listProducts
    this.cons.getProductById(this.id).subscribe(
      (data)=>this.listProducts=data
    );
    console.log(this.listProducts)


  }

}
