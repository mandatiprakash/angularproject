import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, viewChild, ViewChildren } from '@angular/core';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements AfterViewInit{

  customerName: string | undefined;
  customers: string[];

  @ViewChild('clistcomp')customerListComp: CustomerListComponent | undefined;

  @ViewChild('divMessage')div: ElementRef | undefined;

  constructor() {
    this.customers = [];
  }

  ngAfterViewInit(): void {
    this.customerListComp
  }

  addCustomer() {


    this.customers.push(this.customerName ?? "");

    //this.customerListComp?.customerList.push(this.customerName ?? "");


    if (this.div != undefined) {
      this.div.nativeElement.innerText = 'New customer added';
      setTimeout(() => {
        if (this.div != undefined) {
          this.div.nativeElement.innerText = '';
        }
      }, 2000);
    }
  }

  readValues(cust: string) {
    this.customerName = cust;
  }

}
