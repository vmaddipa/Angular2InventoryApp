import { Component, OnInit } from '@angular/core';
import{Product} from '../app.model';
@Component({
  selector: 'product-department',
  inputs: ['product'],
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent  {
product: Product;
  constructor() { }

}
