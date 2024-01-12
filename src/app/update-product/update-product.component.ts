import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerProductService } from '../Services/consumer-product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { product } from '../core/models/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  constructor(private route:Router,private cons:ConsumerProductService,private act :ActivatedRoute){}
  registerForm!: FormGroup;
  id!:number
  produit!:product
  ngOnInit(){
    this.registerForm= new FormGroup({
      id:new FormControl(),
      title: new FormControl('',[Validators.required,Validators.minLength(3)]),
      price: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
      like:new FormControl('',Validators.required),
      quantity:new FormControl('',Validators.required),

    });

      //1-Récuperer lid du produit a partir de url
      this.id=this.act.snapshot.params['id'];
      //2-appler la méthode de  service pour obtenir les details du produit de id x
      this.cons.getProductById(this.id).subscribe(
        (data)=> {this.produit=data;
        //3-Initialisation du formulaire avec les données du produit
        this.registerForm.patchValue(this.produit);
        }
      )
  }

  reset(){
    this.registerForm.reset();
  }
  update(){
    this.cons.updateProduct(this.registerForm.value,this.id).subscribe(
      ()=>this.route.navigateByUrl('/product')
    )
  }

}
