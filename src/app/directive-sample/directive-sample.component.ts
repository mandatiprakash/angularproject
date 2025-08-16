import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directive-sample',
  templateUrl: './directive-sample.component.html',
  styleUrl: './directive-sample.component.css'
})
export class DirectiveSampleComponent {
  num: number;
  colors: string[];
  products: Product[];
  selectedColor: string = "red";
  Id: string|undefined;
  city: string|undefined;
  country: string|undefined;

  constructor(private activatedRoute: ActivatedRoute){
    this.num = 0;
    this.colors = ['red', 'green', 'blue'];
    

    let p1 = new Product(101,'Book', 'P121', 454);
    let p2 = new Product(102,'Bag', 'P121', 4994);
    let p3 = new Product(103,'Mouse', 'P121', 904);

    this.products = [];
    this.products.push(p1);
    this.products.push(p2);
    this.products.push(p3);

    this.activatedRoute.params.subscribe(data=> {
        this.Id = data['name'];
    });

    this.activatedRoute.queryParams.subscribe(data=> {
      this.city = data['city'];
      this.country = data['country'];
  })
  }

  addNewProduct(){
    let p4 = new Product(103,'Mouse', 'P121', 904);
    this.products.push(p4);
  }

  callAlert(){
    alert('test');
  }
}
