import { Component, OnInit } from '@angular/core';
import{Product} from '../app.model';
@Component({
  selector: 'product-image',
  host: {class: 'ui small image'},
  inputs: ['product'],
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent  {
product: Product;
  constructor() { }

  

}
