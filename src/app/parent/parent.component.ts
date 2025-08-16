import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit, DoCheck, OnDestroy {
  
  customer: Customer;

  customers: Customer[] = [];


  constructor(){
    this.customer = new Customer();
  }

  ngOnDestroy(): void {
    console.log('Parent destroy called');
  }

  ngDoCheck(): void {
    
  }

  ngOnInit(): void {
    console.log('Parent oninit triggered');
  }

  add(){
    let ob = Object.assign({}, this.customer);
    this.customers.push(ob);
    alert('New customer added');
  }


}
