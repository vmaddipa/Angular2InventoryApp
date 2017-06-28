import { Component } from '@angular/core';
import {Product} from "./app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class InventoryApp {
  product: Product;

constructor() {
this.product = new Product(
'NICEHAT', 'A Nice Black Hat',
 '/resources/images/products/black-hat.jpg',
['Men', 'Accessories', 'Hats'],
 29.99);
}
title = 'Inventory App';
}
  

