import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../core/models/product';

@Component({
  selector: 'app-show-one-product',
  templateUrl: './show-one-product.component.html',
  styleUrls: ['./show-one-product.component.css'],
})
export class ShowOneProductComponent {
  @Input() p!: product;
  @Output() notif = new EventEmitter(); // 1er etape

  sendDataToParent() {
    this.notif.emit(this.p);
  }

  showMsgChild() {
    alert('hello from child');
  }
}
